
$(function(){
   $('#pagepiling').pagepiling({
      sectionsColor: ['#00d8cc', '#00d8cc', '#00d8cc', '#00d8cc'],
      navigation: {
         textColor: '#f00',
         bulletsColor: '#1b58b8',
         position: 'right',
         tooltips: ['Home', 'Project', 'Profession', 'Contact Me']
      },
      loopTop: true,
      loopBottom: true
   });
});
