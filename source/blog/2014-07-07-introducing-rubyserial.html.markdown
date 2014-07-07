---
page_title_show: true
title: Introducing rubyserial
page_title: Blog
date: 2014-07-07
tags: robots
author: Javier Cervantes
active_menu_blog: true
---

Today we are happy to announce Rubyserial, a ruby gem for reading from and writing
to serial ports.

It works on windows, mac and linux without native compilation and it can be used
in any ruby implementation: mri, jruby and rubinius.

Artoo driver for: arduino, sphero and neurosky have been already migrated
to use rubyserial by default.

If you want to give it a try, install via rubygems:
      gem install rubyserial

And start using it:

    :::ruby
    require 'rubyserial'
    serialport = Serial.new '/dev/ttyACM0', 57600

We currently support the following methods:

* **write(data : String) -> Int** : Returns the number of bytes written.
* **read(length : Int) -> String** : Returns a string up to `length` long.
* **getbyte -> Fixnum or nil** : Returns an 8 bit byte or nil if no data is available.

All of them emit a `RubySerial::Exception` on error.

We are very excited to have this initial version out, and we will be pleased to have your feedback and contributions
in [RubySerial Repository] (https://github.com/hybridgroup/rubyserial)
