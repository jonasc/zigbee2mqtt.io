"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8712],{81860:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a={key:"v-5d588a76",path:"/guide/faq/",title:"FAQ",lang:"en-US",frontmatter:{sidebarDepth:0,pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Why does my device not or fail to pair?",slug:"why-does-my-device-not-or-fail-to-pair",children:[{level:3,title:"No logging is shown at all",slug:"no-logging-is-shown-at-all",children:[]},{level:3,title:"Interview fails",slug:"interview-fails",children:[]}]},{level:2,title:"How do I migrate from one adapter to another?",slug:"how-do-i-migrate-from-one-adapter-to-another",children:[]},{level:2,title:"How do I move my Zigbee2MQTT instance to a different environment?",slug:"how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment",children:[]},{level:2,title:"What does and does not require repairing of all devices?",slug:"what-does-and-does-not-require-repairing-of-all-devices",children:[{level:3,title:"Requires repairing",slug:"requires-repairing",children:[]},{level:3,title:"Doesn't require repairing",slug:"doesn-t-require-repairing",children:[]}]},{level:2,title:"Why are some links missing from my networkmap?",slug:"why-are-some-links-missing-from-my-networkmap",children:[]},{level:2,title:"Why is the action property always empty?",slug:"why-is-the-action-property-always-empty",children:[]},{level:2,title:"I read that Zigbee2MQTT has a limit of 20 devices (when using a CC2530/CC2531 adapter), is this true?",slug:"i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true",children:[{level:3,title:"Example",slug:"example",children:[]}]},{level:2,title:"Common error codes",slug:"common-error-codes",children:[]},{level:2,title:"How do I run multiple instances of Zigbee2MQTT?",slug:"how-do-i-run-multiple-instances-of-zigbee2mqtt",children:[]},{level:2,title:"Zigbee2MQTT crashes after some time",slug:"zigbee2mqtt-crashes-after-some-time",children:[]}],filePathRelative:"guide/faq/README.md",git:{updatedTime:1647195129e3}}},6997:(e,i,t)=>{t.r(i),t.d(i,{default:()=>ii});var a=t(66252);const o=(0,a._)("h1",{id:"faq",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),(0,a.Uk)(" FAQ")],-1),r={class:"table-of-contents"},n=(0,a.Uk)("Why does my device not or fail to pair?"),l=(0,a.Uk)("No logging is shown at all"),s=(0,a.Uk)("Interview fails"),d=(0,a.Uk)("How do I migrate from one adapter to another?"),h=(0,a.Uk)("How do I move my Zigbee2MQTT instance to a different environment?"),u=(0,a.Uk)("What does and does not require repairing of all devices?"),c=(0,a.Uk)("Requires repairing"),g=(0,a.Uk)("Doesn't require repairing"),m=(0,a.Uk)("Why are some links missing from my networkmap?"),p=(0,a.Uk)("Why is the action property always empty?"),f=(0,a.Uk)("I read that Zigbee2MQTT has a limit of 20 devices (when using a CC2530/CC2531 adapter), is this true?"),w=(0,a.Uk)("Example"),b=(0,a.Uk)("Common error codes"),y=(0,a.Uk)("How do I run multiple instances of Zigbee2MQTT?"),_=(0,a.Uk)("Zigbee2MQTT crashes after some time"),k=(0,a._)("h2",{id:"why-does-my-device-not-or-fail-to-pair",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#why-does-my-device-not-or-fail-to-pair","aria-hidden":"true"},"#"),(0,a.Uk)(" Why does my device not or fail to pair?")],-1),v=(0,a._)("p",null,"This problem can be divided in 2 categories; no logging is shown at all OR interview fails.",-1),U=(0,a._)("h3",{id:"no-logging-is-shown-at-all",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#no-logging-is-shown-at-all","aria-hidden":"true"},"#"),(0,a.Uk)(" No logging is shown at all")],-1),C=(0,a.Uk)("Make sure "),T=(0,a.Uk)("joining is enabled"),q=(0,a.Uk)("."),W=(0,a._)("li",null,"There can be too much interference, try connecting the coordinator USB through an USB extension cable. This problem occurs a lot when used in combination with a Raspberry Pi 3 and 4.",-1),I=(0,a._)("li",null,"If you are using a Raspberry Pi, try disconnecting any other USB devices. If after that pairing works, try connecting the USB devices via a powered USB hub.",-1),Z=(0,a._)("li",null,"Make sure that any other Zigbee networks/hubs are powered down. When you e.g. want to pair an IKEA bulb which was first paired to the IKEA gateway make sure to power down the IKEA gateway. If that doesn't help also try powering down all devices that are connected to the IKEA hub.",-1),x=(0,a._)("li",null,"If it's a battery powered device, try replacing the battery.",-1),M=(0,a._)("li",null,"You've hit the device limit of the coordinator, especially occurs when using the CC2531 or CC2530 in combination with the source routing firmware. Try reflashing the coordinator and immediately pair the device after starting Zigbee2MQTT.",-1),S=(0,a._)("li",null,"Try pairing the device closer to the coordinator.",-1),Q=(0,a._)("li",null,[(0,a.Uk)("CC2531/CC2530 coordinator only: "),(0,a._)("ul",null,[(0,a._)("li",null,"Stop Zigbee2MQTT, unplug the coordinator, wait 10 seconds, plug the coordinator, start Zigbee2MQTT and try to pair the device again."),(0,a._)("li",null,"If none of the above helps, try to reflash the coordinator (does not require repairing of already paired devices).")])],-1),z=(0,a._)("h3",{id:"interview-fails",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#interview-fails","aria-hidden":"true"},"#"),(0,a.Uk)(" Interview fails")],-1),A=(0,a._)("li",null,"Try pairing the device closer to the coordinator.",-1),E=(0,a._)("li",null,"There can be too much interference, try connecting the coordinator USB through an USB extension cable. This problem occurs a lot when used in combination with a Raspberry Pi 4.",-1),R=(0,a._)("li",null,"If it’s a battery powered device, try replacing the battery. Try to keep the device awake by pressing the button of the device (if any) every 3 seconds.",-1),D=(0,a._)("li",null,"Try repairing the device again for 2 or 3 times.",-1),H=(0,a.Uk)("This might be a Zigbee2MQTT bug, "),B={href:"https://github.com/Koenkk/zigbee2mqtt/issues/new",target:"_blank",rel:"noopener noreferrer"},N=(0,a.Uk)("Create a new issue"),L=(0,a.Uk)(" with the zigbee-herdsman debug logging attached to it. "),P=(0,a.Uk)("How to enable zigbee-herdsman debug logging"),F=(0,a.Uk)("."),K=(0,a.Uk)("If device joins with "),Y=(0,a._)("code",null,"0x000000000000000",-1),j=(0,a.Uk)(" as "),O=(0,a._)("code",null,"ieeeAddress",-1),X=(0,a.Uk)(" (you will see: "),G=(0,a._)("code",null,"Starting interview of '0x0000000000000000'",-1),J=(0,a.Uk)(" in the Zigbee2MQTT log) your CC253X might be broken. "),V={href:"https://github.com/Koenkk/zigbee2mqtt/issues/2761",target:"_blank",rel:"noopener noreferrer"},$=(0,a.Uk)("See issue #2761"),ee=(0,a.Uk)("."),ie=(0,a.Uk)("In case the device is a bulb, try resetting it through "),te=(0,a.Uk)("Touchlink"),ae=(0,a._)("li",null,"Try pairing close to a bulb (light) router instead of the coordinator.",-1),oe=(0,a._)("h2",{id:"how-do-i-migrate-from-one-adapter-to-another",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#how-do-i-migrate-from-one-adapter-to-another","aria-hidden":"true"},"#"),(0,a.Uk)(" How do I migrate from one adapter to another?")],-1),re=(0,a._)("p",null,"Want to migrate from e.g. a CC2531 to a more powerful adapter (e.g. ZZH)? Then follow these instructions:",-1),ne=(0,a._)("li",null,"First make sure you are running the latest version of Zigbee2MQTT",-1),le=(0,a._)("li",null,"Stop Zigbee2MQTT",-1),se=(0,a.Uk)("Determine wether migrating "),de=(0,a._)("a",{href:"#what-does-and-does-not-require-repairing-of-all-devices"},"requires repairing of your devices",-1),he=(0,a._)("li",null,[(0,a.Uk)("If repairing is required: remove "),(0,a._)("code",null,"data/coordinator_backup.json"),(0,a.Uk)(" (if it exists) and "),(0,a._)("code",null,"data/database.db")],-1),ue=(0,a.Uk)("If repairing is "),ce=(0,a._)("strong",null,"not",-1),ge=(0,a.Uk)(" required: "),me=(0,a.Uk)("copy the ieee address of the old adpter into the new one"),pe=(0,a._)("li",null,[(0,a.Uk)("Update the "),(0,a._)("code",null,"serial"),(0,a.Uk)(" -> "),(0,a._)("code",null,"port"),(0,a.Uk)(" in your "),(0,a._)("code",null,"configuration.yaml")],-1),fe=(0,a._)("li",null,"Start Zigbee2MQTT",-1),we=(0,a.uE)('<ul><li>If repairing was required: <ol><li>Disconnect power of all mains powered devices</li><li>Start repairing devices 1 by 1</li></ol></li><li>If repairing was <strong>not</strong> required and your devices do not respond; restart some routers by removing them from the mains power for a few seconds.</li></ul><h2 id="how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment" tabindex="-1"><a class="header-anchor" href="#how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment" aria-hidden="true">#</a> How do I move my Zigbee2MQTT instance to a different environment?</h2><p>Details about your network are stored in both the coordinator and files under the <code>data/</code> directory. To move your instance to another environment move the contents of the <code>data</code> directory and update the path to your coordinator in your <code>configuration.yaml</code>. Now you can start Zigbee2MQTT.</p><h2 id="what-does-and-does-not-require-repairing-of-all-devices" tabindex="-1"><a class="header-anchor" href="#what-does-and-does-not-require-repairing-of-all-devices" aria-hidden="true">#</a> What does and does not require repairing of all devices?</h2><h3 id="requires-repairing" tabindex="-1"><a class="header-anchor" href="#requires-repairing" aria-hidden="true">#</a> Requires repairing</h3><p>You need to re-pair all you devices when:</p><ul><li>Changing the network key (<code>network_key</code>), Zigbee channel (<code>channel</code>) or panID (<code>pan_id</code>) in <code>configuration.yaml</code>.</li><li>Switching between adapters requires repairing, <strong>except when</strong>: <ul><li>When adapters are the same repairing is <strong>not</strong> required (e.g. CC2531 -&gt; CC2531)</li><li>Switching from a CC2530 or CC2531 based adapter to a CC2538/CC2652/CC1352 based adapter does <strong>not</strong> require repairing (e.g. CC2531 -&gt; CC2652)</li><li>Switching between CC2538, CC2652 and CC1352 based adapters does <strong>not</strong> require repairing (e.g. CC2538 -&gt; CC2652)</li></ul></li></ul><h3 id="doesn-t-require-repairing" tabindex="-1"><a class="header-anchor" href="#doesn-t-require-repairing" aria-hidden="true">#</a> Doesn&#39;t require repairing</h3><p>You <strong>don&#39;t</strong> need to re-pair your devices when:</p><ul><li>Updating or downgrading Zigbee2MQTT to a different version.</li><li>Updating the coordinator firmware. <ul><li>If after flashing you fail to control your devices it helps to: <ul><li>Wait a few minutes so that the Zigbee network can settle.</li><li>Send Zigbee commands (e.g. turn on/off) to the device.</li><li>Reboot the device (unplug and plug power).</li></ul></li></ul></li><li>Switching the system running Zigbee2MQTT. <ul><li>When doing this, make sure to copy over the contents of the <code>data</code> directory.</li></ul></li></ul><h2 id="why-are-some-links-missing-from-my-networkmap" tabindex="-1"><a class="header-anchor" href="#why-are-some-links-missing-from-my-networkmap" aria-hidden="true">#</a> Why are some links missing from my networkmap?</h2><p>No worry, in case it happens with end devices (battery powered) it most of the times <strong>does not</strong> mean the devices aren&#39;t connected to the network map anymore. Some end devices (e.g. Xiaomi door sensor) sleep for a too long time which causes the parent (router child ageing) to remove it from it from its child table. This is what causes the missing link. Even while its not in the child table anymore, the end device can still communicate via the router. This does not always happen since not all routers use child ageing (this is a Zigbee 3.0 feature).</p><h2 id="why-is-the-action-property-always-empty" tabindex="-1"><a class="header-anchor" href="#why-is-the-action-property-always-empty" aria-hidden="true">#</a> Why is the <code>action</code> property always empty?</h2><p>When the Home Assistant integration is enabled (<code>homeassistant: true</code> in your <code>configuration.yaml</code>) the <code>action</code> property of your e.g. buttons will almost always be empty. Whenever an <code>action</code> is published e.g. <code>{&quot;action&quot;: &quot;single&quot;}</code> it will be immediately followed up by a <code>{&quot;action&quot;: &quot;&quot;}</code>. This is to trigger a state change in the Home Assistant action sensor (so that it can be used in e.g. automations).</p><h2 id="i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true" tabindex="-1"><a class="header-anchor" href="#i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true" aria-hidden="true">#</a> I read that Zigbee2MQTT has a limit of 20 devices (when using a CC2530/CC2531 adapter), is this true?</h2>',15),be=(0,a.Uk)("Definitely not! Example given: the default Zigbee2MQTT CC2531 firmware indeed supports 20 devices connected "),ye=(0,a._)("strong",null,"directly",-1),_e=(0,a.Uk)(" to the coordinator. However, by having routers in your network the network size can be extended. Probably all AC powered devices e.g. bulbs serve as a router, you can even use another "),ke=(0,a.Uk)("CC2530/CC2531 as a router"),ve=(0,a.Uk)(" (which has a limit of 21 devices)."),Ue=(0,a.uE)('<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>When using the default Zigbee2MQTT CC2531 coordinator firmware + 2 CC2531 routers your device limit will be:</p><ul><li>Coordinator: 15 - 2 routers = 13</li><li>Router 1: 21</li><li>Router 2: 21</li><li><strong>Device limit of 55 devices</strong></li></ul><h2 id="common-error-codes" tabindex="-1"><a class="header-anchor" href="#common-error-codes" aria-hidden="true">#</a> Common error codes</h2><p>A list of common error codes and what to do in case of them:</p>',5),Ce=(0,a._)("code",null,"MAC_CHANNEL_ACCESS_FAILURE",-1),Te=(0,a.Uk)(": this happens when the wireless spectrum is too occupied. Mostly happens when a microwave is on or when there are WiFi networks on the same channel. See "),qe=(0,a.Uk)("Reduce Wifi interference by changing the Zigbee channel"),We=(0,a.Uk)(" how to fix this."),Ie=(0,a._)("code",null,"NWK_TABLE_FULL",-1),Ze=(0,a.Uk)(": "),xe={href:"https://github.com/Koenkk/zigbee2mqtt/issues/4964#issuecomment-757022560",target:"_blank",rel:"noopener noreferrer"},Me=(0,a.Uk)("reported"),Se=(0,a.Uk)(" to have same root cause as the above "),Qe=(0,a._)("code",null,"MAC_CHANNEL_ACCESS_FAILURE",-1),ze=(0,a._)("h2",{id:"how-do-i-run-multiple-instances-of-zigbee2mqtt",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#how-do-i-run-multiple-instances-of-zigbee2mqtt","aria-hidden":"true"},"#"),(0,a.Uk)(" How do I run multiple instances of Zigbee2MQTT?")],-1),Ae=(0,a.Uk)("In case you setup multiple instances of Zigbee2MQTT it's important to use a different "),Ee=(0,a._)("code",null,"base_topic",-1),Re=(0,a.Uk)(" and "),De=(0,a._)("code",null,"channel",-1),He=(0,a.Uk)(". This can be configured in the "),Be=(0,a._)("code",null,"configuration.yaml",-1),Ne=(0,a.Uk)("."),Le=(0,a._)("h2",{id:"zigbee2mqtt-crashes-after-some-time",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#zigbee2mqtt-crashes-after-some-time","aria-hidden":"true"},"#"),(0,a.Uk)(" Zigbee2MQTT crashes after some time")],-1),Pe=(0,a._)("p",null,[(0,a.Uk)("If after some uptime Zigbee2MQTT crashes with errors like: "),(0,a._)("code",null,"SRSP - AF - dataRequest after 6000ms"),(0,a.Uk)(" or "),(0,a._)("code",null,"SRSP - ZDO - mgmtPermitJoinReq after 6000ms"),(0,a.Uk)(" it means the adapter has crashed.")],-1),Fe=(0,a._)("li",null,"Normally this can be fixed by replugging the adapter and restarting Zigbee2MQTT",-1),Ke=(0,a.Uk)("If you are using a CC2530 or CC2531 adapter consider upgrading to one of the "),Ye=(0,a.Uk)("recommended adapters"),je=(0,a.Uk)(". The CC2530/CC2531 is considered legacy hardware and runs into memory corruption easily."),Oe=(0,a.Uk)("Make sure you are using the latest firmware on your adapter, see the "),Xe=(0,a.Uk)("adapter page"),Ge=(0,a.Uk)(" for a link to the latest firmware."),Je=(0,a._)("li",null,"If using a Raspberry Pi; this problem can occur if you are using a bad power supply or when other USB devices are connected direclty to the Pi (especially occurs with external SSD), try connecting other USB devices through a powered USB hub.",-1),Ve=(0,a._)("li",null,[(0,a.Uk)("Disable the USB autosuspend feature, if "),(0,a._)("code",null,"cat /sys/module/usbcore/parameters/autosuspend"),(0,a.Uk)(" returns "),(0,a._)("code",null,"1"),(0,a.Uk)(" or "),(0,a._)("code",null,"2"),(0,a.Uk)(" it is enabled; to disable execute:")],-1),$e=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sed</span> -i <span class="token string">&#39;s/GRUB_CMDLINE_LINUX_DEFAULT=&quot;/&amp;usbcore.autosuspend=-1 /&#39;</span> /etc/default/grub\n<span class="token function">update-grub</span>\nsystemctl <span class="token function">reboot</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),ei={},ii=(0,t(83744).Z)(ei,[["render",function(e,i){const t=(0,a.up)("RouterLink"),ei=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("nav",r,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(t,{to:"#why-does-my-device-not-or-fail-to-pair"},{default:(0,a.w5)((()=>[n])),_:1}),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(t,{to:"#no-logging-is-shown-at-all"},{default:(0,a.w5)((()=>[l])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#interview-fails"},{default:(0,a.w5)((()=>[s])),_:1})])])]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#how-do-i-migrate-from-one-adapter-to-another"},{default:(0,a.w5)((()=>[d])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment"},{default:(0,a.w5)((()=>[h])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#what-does-and-does-not-require-repairing-of-all-devices"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(t,{to:"#requires-repairing"},{default:(0,a.w5)((()=>[c])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#doesn-t-require-repairing"},{default:(0,a.w5)((()=>[g])),_:1})])])]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#why-are-some-links-missing-from-my-networkmap"},{default:(0,a.w5)((()=>[m])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#why-is-the-action-property-always-empty"},{default:(0,a.w5)((()=>[p])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true"},{default:(0,a.w5)((()=>[f])),_:1}),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(t,{to:"#example"},{default:(0,a.w5)((()=>[w])),_:1})])])]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#common-error-codes"},{default:(0,a.w5)((()=>[b])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#how-do-i-run-multiple-instances-of-zigbee2mqtt"},{default:(0,a.w5)((()=>[y])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"#zigbee2mqtt-crashes-after-some-time"},{default:(0,a.w5)((()=>[_])),_:1})])])]),k,v,U,(0,a._)("ul",null,[(0,a._)("li",null,[C,(0,a.Wm)(t,{to:"/guide/usage/pairing_devices.html"},{default:(0,a.w5)((()=>[T])),_:1}),q]),W,I,Z,x,M,S,Q]),z,(0,a._)("ul",null,[A,E,R,D,(0,a._)("li",null,[H,(0,a._)("a",B,[N,(0,a.Wm)(ei)]),L,(0,a.Wm)(t,{to:"/guide/usage/debug.html#zigbee-herdsman-debug-logging"},{default:(0,a.w5)((()=>[P])),_:1}),F]),(0,a._)("li",null,[K,Y,j,O,X,G,J,(0,a._)("a",V,[$,(0,a.Wm)(ei)]),ee]),(0,a._)("li",null,[ie,(0,a.Wm)(t,{to:"/guide/usage/touchlink.html"},{default:(0,a.w5)((()=>[te])),_:1})]),ae]),oe,re,(0,a._)("ol",null,[ne,le,(0,a._)("li",null,[se,de,(0,a._)("ul",null,[he,(0,a._)("li",null,[ue,ce,ge,(0,a.Wm)(t,{to:"/guide/adapters/flashing/copy_ieeaddr.html"},{default:(0,a.w5)((()=>[me])),_:1})])])]),pe,fe]),we,(0,a._)("p",null,[be,ye,_e,(0,a.Wm)(t,{to:"/advanced/zigbee/05_create_a_cc2530_router.html"},{default:(0,a.w5)((()=>[ke])),_:1}),ve]),Ue,(0,a._)("ul",null,[(0,a._)("li",null,[Ce,Te,(0,a.Wm)(t,{to:"/advanced/zigbee/02_improve_network_range_and_stability.html#reduce-wifi-interference-by-changing-the-zigbee-channel"},{default:(0,a.w5)((()=>[qe])),_:1}),We]),(0,a._)("li",null,[Ie,Ze,(0,a._)("a",xe,[Me,(0,a.Wm)(ei)]),Se,Qe])]),ze,(0,a._)("p",null,[Ae,Ee,Re,De,He,(0,a.Wm)(t,{to:"/guide/configuration/"},{default:(0,a.w5)((()=>[Be])),_:1}),Ne]),Le,Pe,(0,a._)("ul",null,[Fe,(0,a._)("li",null,[Ke,(0,a.Wm)(t,{to:"/guide/adapters/"},{default:(0,a.w5)((()=>[Ye])),_:1}),je]),(0,a._)("li",null,[Oe,(0,a.Wm)(t,{to:"/guide/adapters/"},{default:(0,a.w5)((()=>[Xe])),_:1}),Ge]),Je,Ve]),$e],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{for(const[t,a]of i)e[t]=a;return e}}}]);