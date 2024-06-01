<h1>WEB SOUNDS GUIDE</h1>
</br></br>
<b>What is web Sounds </b>
</br>
websounds is a project that help developers to add sound effect to their website.Though 
this can be achieved through the normal standard audio feature on the browser,Websounds build on this to bring for you multiple functionality into your  website.
</br>
</br>
<b>Where to use web-sounds</b>
</br>
You can use web sounds  when you are making your web  games or when you just need to add audio  flavour to your website eg button click sounds etc.Websounds will help with that
</br>
</br>
<b>Installation</b>
</br>
simply copy the code down below to add websounds to your current project
</br>
<code> npm i @ronjohnson/web-sounds@latest </code>
</br></br>
<b>How to use it</b>
Once you have installed websounds you can call it from anywhere in your 
code like so:
</br>
<code>
import { your_function } from "@ronjohnson/web-sounds"
//anywhere in your code
your_function(); //this line will play the default sound and default duration
</code>
</br>
</br>
check the functions table  to see how many  functions you can use with web sounds
Below is a table of functions and their explanation:
</br> 
</br>
</br>
<h3>Functions table</h3>
</br>
<table>
    <thead>
    <tr>
    <th>Function</th>
    </tr>
        <tr>
    <th>Explanation</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>play_reaction()</td>
    </tr>
    <tr>
    <td>Takes two parameter the name of the effect you want to play(check the effects list) and time where -1 is play the effect to the end while 7 is the default(time in seconds)
    example: play_reaction("car_hoot",-1);
    </td>
    </tr>
        <tr>
    <td>play_custom()</td>
    </tr>
    <tr>
    <td>same as the one above. Takes two parameter the url of the sound effect  you want to play and time where -1 is play the effect to the end while 7 is the default(time in seconds)
    example: play_reaction("car_hoot",-1); 
    </td>
    </tr>
    </tbody>
</table>


<h3>effect list</h3>
</br>
<ul>
<li>audience1</li>
<li>audience_long_deep</li>
<li>audience_firework</li>
<li>car_passing</li>
<li>car_hoot</li>
<li>car_engine_rave</li>
<li>car_fixing</li>
<li>default</li>
<li>foot_walk</li>
<li>snow_walk</li>
<li>shovel_dig</li>
<li>dig_underground</li>
<li>rocket_flyby</li>
<li>gun_cork</li>
<li>space_launch</li>
<li>foot_walk2</li>
<li>hospital_walk</li>
<li>walking_on_wood</li>
<li>gravel_walk</li>
<li>baby_cry</li>
<li>deep_baby_cry</li>
<li>crying_new_born</li>
<li>man_groan</li>
<li>ghost_cry</li>
<li>bird_cry</li>
<li>baby_cry_long</li>
<li>evil_laugh</li>
<li>evil_laugh_loud</li>
<li>witch_laugh</li>
<li>audience_laugh</li>
<li>button_click</li>
<li>error</li>
<li>success</li>
<li>camera_open</li>
</ul>






