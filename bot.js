const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix 

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag}ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', msg => {
    if (msg.content === prefix + 'ping') {
      msg.channel.send('Şuanki Gecikmen: ' + client.ping + 'ms');
    }

    if (msg.content === 'sa') {
      msg.reply('Aleyküm Selam, Hoşgeldin');
    }

    if (msg.content === 's.a') {
      msg.reply('Aleyküm Selam, Hoşgeldin');
    }

    if (msg.content === 'Selam') {
      msg.reply('Aleyküm Selam, Hoşgeldin');
    }

    if (msg.content === prefix + 'profilresmim') {
    msg.channel.send(msg.author.avatarURL);
  }
 
    if (msg.content === prefix + 'reboot') {

      if (msg.author.id === "404320441193201675") {
          msg.channel.send('BABANIZ Uyuyup Geliyoor...').then(msg => {
              console.log('yeniden başlatılıyor')
              process.exit(0);
          });
      } else msg.channel.send('NAH YAPARSIN!')
  }

  if (msg.content === prefix +'sürüm') {
      msg.reply('Botun Sürümü: 0.0.1');
    }
	
  if (msg.content === 'Sa') {
      msg.reply('Aleyküm Selam, Hoşgeldin');
    }
	
  if (msg.content === 'sA') {
      msg.reply('Aleyküm Selam, Hoşgeldin');
    }
	
  if (msg.content === 'SA') {
      msg.reply('Aleyküm Selam, Hoşgeldin');
    }
	
  if (msg.content === prefix +'yenisürüm') {
      msg.reply('Botun Şuanki Sürümü: 0.0.1 dir. Sahibi Ölünce 0.0.2. gelecektir');
    }
	
  if (msg.content === prefix +'turbaslat') {
      msg.channel.send('```OYUN YÜKLENİYOR BİRAZ ZAMAN ALABİLİR.```'),
	  msg.channel.send('```|||| 23%```'),
	  msg.channel.send('```||||||||| 66%```'),
      msg.channel.send('```|||||||||||| 88%```'),	
	  msg.channel.send('```||||||||||||||| 100% YÜKLEME İŞLEMİ BAŞARILI BİR ŞEKİLDE GERÇEKLEŞTİRİLDİ.```'),
	  msg.channel.send('```OYUNCUYA SEÇENEKLER SUNULSUN MU ?```'),
	  msg.channel.send('```EVET YA DA HAYIR DİYİNİZ. (yetkililer dışında kullanmak yasaktır!!!)```');
    }
		
  if (msg.content === prefix + 'evet') {
      msg.channel.send('```->Devam Et?<-```'),
	  msg.channel.send('```->Yeniden Başlat?<-```'),
	  msg.channel.send('```->Karakteri Düzenle?<-```'),
      msg.channel.send('```->Turu Gec?<-```');
    }
	
  if (msg.content === prefix + 'hayır') {
      msg.channel.send('```TUR ATLANDI...```');
    }    
		
  if (msg.content === 'devam et') {
      msg.channel.send('```Adminin Turu Başlatması Bekleniyor...```');
    }    
    	
  if (msg.content === 'yeniden başlat') {
      msg.channel.send('```Oyuncu Herşeye Baştan Başladı...```');
    }    
    	
  if (msg.content === 'karakteri düzenle') {
      msg.channel.send('```Karakter Düzenlenmesi İçin Admin Bekleniyor...```');
    }    
    	
  if (msg.content === 'turu geç') {
      msg.channel.send('```Tur Geçildi, Başka Oyuncu Bekleniyor...```');
    }    
	
	if (msg.content === prefix +'turbitir') {
      msg.channel.send('```TUR BİTTİ... DİĞER OYUNCULAR BEKLENİYOR...```');
	}
	
	if (msg.content === prefix +'devletler') {
      msg.channel.send('``` __DEVLETLER__ ```'),
	  msg.channel.send('```Svadya Krallığı ```'),
	  msg.channel.send('```Nord Krallığı ```'),
	  msg.channel.send('```Kergit Hanlığı ```'),
	  msg.channel.send('```Rodok Cumhuriyeti ```'),
	  msg.channel.send('```Büyük Vaegir Prensliği ```'),
	  msg.channel.send('```Sarranid Sultanlığı ```');
	}

});

client.login(ayarlar.token);
