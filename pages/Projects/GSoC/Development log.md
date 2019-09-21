
# Development log

> This is my journey while developing the "EV3 as a Storage Device" project. You can find the introduction in the left menu.
> If you're interested in finding out how the EV3 firmware works, I plan to write an article about what I understood during GSoC when I have time. You'll find it linked here in the (hopefully near) future.

## Community bonding period

This period is perfect to finalize the implementation details with your mentors. We come up with the idea to use the c4ev3 library, and to use Open Roberta to generate C++ source code.

## First evaluation period

::: history-list

### Definition of the robot plugin

In OpenRoberta, every robot is a separate maven project, which is called a Robot plugin. The EV3 plugin already has two sub plugins, so I just needed to add
another one. For each plugin there is a "Workflow" class that describes how to generate the code from the AST and how to compile the code.


### Pack uf2 and generate rbf

<div class="history-list-item-multiple-paragraphs">

The whole project start from the new support of this file format in the new firmware.
I read the documentation and did some tests to understand how UF2 works and then I create a class in Java to create it. UF2 has different modes in which it can be used, and
the EV3 need the "File container" mode, which allows to pack multiple files into one file. When the file is copied over the EV3, the robot will extract the files
and place them in their paths.


> Fun fact: eading the robot firmware source code, you'll discover that all the program uploaded to the robot are placed in a ramdisk. Only when the robot shutdown it copiers the file to the flash memory. 

Nice, but what to put in the Robot?
The EV3 will show in the menu only RBF files. RBF is the extension of a file that contains VM instructions for EV3. To start I copied the file from ev3duder and just patched it with the name of the binary generated from the compilation of the C++ code. This way, when the user starts the RBF file, the EV3 VM executes the `system` instruction and start the compiled program.

</div>

### Code generation

This was pretty straightforward, and I just needed to look at how it was done in the other plugins. I didn’t really like some part of my code, since it was similar to other plugins, so I took some notes to later on refactor the code and clean the duplicated parts

### Beep when program copied

When the UF2 files is copied on the robot, the user has no way to know if the upload was successful.
If the user is already on the EV3 file explorer page, nothing will happen: the user needs to navigate back and forth to a different page to trigger a refresh.
So, during the meeting with my mentors we decided to beep the robot when the program is transferred. This required to start the program when the UF2 gets extracted, and that shouldn't be a problem since MakeCode automatically starts the program automatically.
But, for some reason, that wasn’t happening for my program. At the beginning I thought that maybe there could be a flag to tell the EV3 to start a program when it is copied.
A couple of hours later, I understood that my implementation of UF2 was wrong: I messed up two fields, the size of the file and the number of the chuck... 
To be honest, I don’t know how and why the program was working anyway 😅. 
Once I fixed the two fields the program started automatically.


### I<sup>2</sup>C sensors

<div class="history-list-item-multiple-paragraphs">

I<sup>2</sup>C is a communication protocol which should be easy to implement. Reading the firmware I found a call to ioctl
that should allow to set up a I<sup>2</sup>C connection, but sometimes it didn't work. The I<sup>2</sup>C sensors that I had
were the HiTechnic Compass and IR seeker V2, which unfortunately don't have any led or other flags to indicated in which
way they are working. So I hocked up an Arduino as a I<sup>2</sup>C slave device and printed the messages coming from the EV3.
The Arduino helped me to understand how this code worked and then, after some hours of trial and error, I implemented the sensors.

</div>

:::

## Second evaluation period

::: history-list

### Enable integration tests

The Open Roberta platform comes with unit tests, and I was running them before committing my code. Even if they are many they run pretty fast and I was happy. Then my mentors informed me about some integrations test that the platform also has. I installed the required tools, tried to run them and... they took around 10 minutes to run. In the end, this wasn't a problem, since I ended up running them once a day.

### TTS

<div class="history-list-item-multiple-paragraphs">

In the other two ways that the EV3 is supported by Open Roberta, they added a text-to-speech functionality. A goal of the project was to support
the same programming blocks supported by the other ways, so this meant that I needed to also impement TTS.

During the community bonding period I tried to implement it and it
was working, but very slowly: my PoC used eSpeak to generate the synthetized text in WAV and then
sox to resample it from 22050Hz 16 bit to 8000Hz 8 bit (the only format supported by c4ev3). Specifically, the phrase "Hallo ich bin ein EV3 wie geht es dir? Mir geht es gut." was taking around 6 seconds to be generated and 15 seconds to be resampled.

After various tries, with the help of the OpenRoberta members, I lowered the time needed to resample the audio (implementing a simple algorithm "by hand") file and got a decent speech, but there was still room for improvement.

Then... an Open Roberta member linked to me an issue on the eSpeak repository that talked about the possibility to resample eSpeak files while compiling eSpeak itself. Recompiled espeak-data and now
I was able to get audio files at 80000MHz. It was then just a matter of adding support to play 16bit audio files to c4ev3 to completely eliminate the need of sox. With this approach also synthesizing the audio was slightly faster, and at the end, the same phrase as before, was taking around 4 second to be generated.

   
</div> 
  
### Bluetooth

<div class="history-list-item-multiple-paragraphs">

I started my tests with bluetooth trying to use the Bluez C API. Althoguh I was able to connect to another bluetooth device (like
an HC-06), I wasn't able to accept connections (that is, use the EV3 as a master/server). Moreover, everytime I tried to start a scan the EV3 interface crashed.
After some experiments with the dbus bluez API and very unstable tests with a lms bridge program (a really bad idea consisting with a program written in lms running in the background that used the EV3 bluetooth API and talked to the generated C program using named pipes), I should have undertood the problem:
- lms, the EV3 user interface, starts a server on channel 1. This measn that I needed to use a differen channel;
- you cannot start a scan, otherwise some code of lms chashes. Fortunatelly lms writes to a text files all the found bluetooth addresses and their name, so I used that file to translate the robot sames to their address;

Finally, I was able to implement the bluetooth using the C Bluez API.

> To be honest, another problem (related to the timer API from c4ev3) forced me to implemented the socket connection in an asynchronus way, which was ~~boring~~ easy to do.

</div>

### Delete programs

<div class="history-list-item-multiple-paragraphs">

Until now, I was putting in the lms2012/prjs/BrkProg_SAVE folder three files (.elf, .rbf and a flag to understand if the program running for the first time), but the user had no way to delete the program through the robot interface. Playing with the official Lego programming software I saw every project (a container for programs) corresponds to a folder.
So, if I used the same structure and put the generated files inside a folder, the user should be able to delete the folder.

I tried to specify in the UF2 file the path to which extract the files including a subfolder, but unfortunately that wasn’t working (the files weren’t being extracted).
This meant that I needed to move the files in a subfolder from the running program.
I've implemented this using four files inside the UF2 program:
- NEPOprog.rbf: rbf to starts the program `lms2012/prjs/BrkProg_SAVE/NEPOprog.elf`;
- NEPOprog.elf: actual program including the code to move the files and beep the robot on the first run;
- a flag to indicate that the program was just uploaded
- NEPOprog.tmp: a rbf file with a different extension (to avoid the EV3 to automatically run it) that starts lms2012/prjs/BrkProg_SAVE/NEPOprog/NEPOprog.elf

If NEPOprog.elf finds the just uploaded flag when it starts, then it won’t execute the user commands but will create the subfolder and move the files in it.

</div>

### Refactor c4ev3

I really appreciate the work done by the c4ev3 guys, they had to figure out a lot of stuff to control the robot without having much documentation from Lego.

But I didn't quite like the ev3_sensors.c file. This file contained:
- the code to communicate with the three different protocols (UART, I<sup>2</sup>C and analog);
- the code to read the raw values from each sensors;
- the code to process the raw values for each sensors;

So I decided to split the files in two folder, one containing a file for each protocol and the other containing a file for each sensors (well, in reality 2 files for each entry, .h and .c). 

:::

## Final evaluation period

::: history-list

### HT color sensor V2

I added the support for this sensor in the c4v3 library. What was different this time was that I didn’t have that sensor, so I organized with my mentor to send him some programs that he could run on its sensor and then report the feedback to me. Surprisingly, that didn't require too many iterations and it was completed in a couple of days.

### Linux support

When you plug an EV3 (running the latest firmware) in your computer using a USB cable, it shows up as a storage device. That is true if you use a Mac, a Chromebook or a Windows machine. But for some obscure reasons, that's not true if you plug it in a linux laptop.

> Come on Lego, you also support Chromebooks! how is it possible that it doesn't work on a standard Ubuntu???

During the development I created a script that used ev3duder and allowed me to have the same effect that copying the UF2 file would have had using a supported OS. With my mentors, we decided to clean up that script and release it, so also other linux users could use it.

:::
