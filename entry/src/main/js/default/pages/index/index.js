// @ts-nocheck
setInterval(
    ()=>{
        d=new Date();
        htime=d.getHours();
        mtime=d.getMinutes();
        stime=d.getSeconds();
        o_hour=htime;
        o_min=mtime;
        o_sec=stime;
        stime=stime+15;
        htime=htime-1.18;
        mtime=mtime-21;
        hrotate=30*htime+mtime/2;
        mrotate=6*mtime;
        srotate=6*stime;
        hour.style.transform=`rotate(${hrotate}deg)`;
        minute.style.transform=`rotate(${mrotate}deg)`;
        second.style.transform=`rotate(${srotate}deg)`;
        hour.style.content=htime;
        h_out="";
        hour_12=o_hour;
        if(hour_12>12){
            hour_12=hour_12-12;
        }
        if(hour_12<10){
            h_out="0";
        }
        m_out="";
        if(o_min<10){
            m_out="0";
        }
        num_rot_h=-hrotate;
        num_rot_m=-mrotate;
        document.getElementById('hourval').innerHTML=h_out+hour_12;
        document.getElementById('minval').innerHTML=m_out+o_min;
        hourval.style.transform=`rotate(${num_rot_h}deg)`;
        minval.style.transform=`rotate(${num_rot_m}deg)`;
        console.log("Hour : "+o_hour+" Minute : "+o_min+" Second : "+o_sec);
        day_int=d.getDay();
        arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        mo_arr= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        day=arr[day_int];
        month=d.getMonth();
        date=d.getDate();
        console.log("Day : "+day+" Date : "+date+" Month : "+mo_arr[month]);
    },1000
);