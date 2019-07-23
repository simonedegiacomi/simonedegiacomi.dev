
# Development log

> This is my journey while developing the "EV3 as a Storage Device" project. Go here to find a description about it

## Community bonding period

The period after you've been selected for participating to GSoC and before the start of the first month of coding it's called "Community bonding period".
I used this time to avoid any configuration problems during the coding period, so I got familiar with the library that I was going to base my project upon and
tried different compilers on different platforms, as well as setting up the OpenRoberta lab development environment.


## First evaluation period


::: history-list

### Definition of the robot plugin

In OpenRoberta, every robot is a separate maven project, which is called a Robot plugin. The EV3 plugin already has two sub plugins, so I just needed to add
another one. For each plugin there is a "Workflow" class that describes how to generate the code from the AST and how to compile the code.


### Pack uf2 and generate rbf

<div class="history-list-item-multiple-paragraphs">

The whole project start from the new support of this file format in the new firmware.
I  read the documentation and did some tests to understand how UF2 works ad then I create a class in Java to create it. UF2 has different modes in which it can be used, and
the EV3 need the "File container" mode, which allows to pack multiple files into one file. When the file is copied over the EV3, the robot will extract the files
and place them in their paths.


> Reading the robot firmware source code, you'll discover that all the program uploaded to the robot are placed in a ramdisk. Only when the robot shutdown it
> copiers the file to the flash memory. 


Nice, but what to put in the Robot?
The EV3 will show in the menu only rbf files. RBF is the extension of a file that contains VM instructions for EV3
For now I copied the file from ev3duder and just patched it, ignoring its content.

</div>

### Code generation

Pretty straightforward, looking at the other implementations, but feeling low writing a lot of similar code (aka copy and paste).
I started to take some notes about how maybe the code could be reused, for example splitting the Visitor in different Visitors. But didn't plan refactor yet.


### Stings and lists (C => C++)

When the need to implement lists arrived I asked the other members and decided to move from C to C++ to use the
linked list. 

### Beep when program copied

When the UF2 files is copied on the robot, the user has no way to know if the upload was succesfull.
If the user is already on the page, nothing will happer. The suer needs to move back and forth to a different page to trigger a refresh.
So, during the meeting with my mentors we decided to beep the robot the program is transfered. This shouldn't be a problem, since MakeCode automatically start
the program (which can be potetionally dangerous). I thoguh that maybe there could be a flag to tell the EV3 to start a program when it is copied.
A couple of hourse later, it turns out that my implementation of UF2 was wrong. In fact, I don't understand why it was working before.
    I messed up two flags, the size of the file and the number of the chuck... fixes that and now, when the file is copied the EV3 start the rvf, which magically starts the
    elf file.
    Now the beep was simple, just added a new file that was used like a flag and when the program start, if it finds that flags beeps and deletes the flag. => TODO: Fix github repo
    (>>) slow => increase payload size
### I<sup>2</sup>C sensors
    
How to use this???

:::


## Second evaluation period

::: history-list

### Enable integration tests

Hey, there are many test but they are fast to run. What are you saying? there are integration tests??
    1 min => 10 min


### TTS

a

### Improve TTS (fast encoding)

a
   
### Bluetooth

a

### Improve TTS (pre-encoding)

a

### Merge c4ev3 into develop

a

### Delete programs

### Refactor c4ev3

a

:::
