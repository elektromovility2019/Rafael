//-------------------BUSCAR EN GOOGLE / YOYUTUBE----------------------------*/

var buscaEnGoogle;
var buscaEnYoutube;
var buscaEnGmail;
var buscaEnFacebook;
var abreWhatsapp;


artyom.addCommands([{
        indexes: ['abre Whatsapp'],
        action: function () {
            abreWhatsapp = window.open("https://web.whatsapp.com/", '_blank', 'width=1350,  height=470, left=0, top=280');
            Responder("aquí tienes Whatsapp");
        }
    },
    {
        indexes: ["Rafael", "cierra Whatssapp"],
        action: function () {
            abreWhatsapp.close();
            Responder(" Whatsapp se ha cerrado");
        }
    },
    {
        indexes: ['busca en Google *'],
        smart: true,
        action: (i, wildcard) => {
            buscaEnGoogle = window.open('https://www.google.com/search?q= ' + wildcard, '_blank', 'width=1350,  height=470, left=0, top=280');
            Responder("aquí tienes algunas busquedas de " + wildcard);
        }
    },
    {
        indexes: ['busca en la red *'],
        smart: true,
        action: (i, wildcard) => {
            buscaEnGoogle = window.open('https://www.google.com/search?q= ' + wildcard, '_blank', 'width=1350,  height=470, left=0, top=280');
            Responder("aquí tienes" + wildcard);
        }
    },
    {
        indexes: ['busca en Youtube *'],
        smart: true,
        action: (i, wildcard) => {
            buscaEnYoutube = window.open('https://www.youtube.com/search?q= ' + wildcard, '_blank', 'width=1350,  height=470, left=0, top=280');
            Responder("aquí tienes algunas busquedas de " + wildcard + " en Youtube");
        }
    },
    {
        indexes: ['busca en GMail *'],
        smart: true,
        action: (i, wildcard) => {
            buscaEnGmail = window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/' + wildcard, '_blank', 'width=1350,  height=470, left=0, top=280');
            Responder("te muestro algunas busquedas de " + wildcard + " en Gmail");
        }
    },
    {
        indexes: ['busca en Facebook *'],
        smart: true,
        action: (i, wildcard) => {
            buscaEnFacebook = window.open('https://www.facebook.com/search?q= ' + wildcard, '_blank', 'width=1350,  height=470, left=0, top=280');
            Responder("Te muestro algunas busquedas de " + wildcard + " en Facebook");
        }
    }
]);



artyom.addCommands([{
        indexes: ["cierra la ventana de Google", "cierra la pestaña de Google", "cierra la búsqueda en Google", "apaga Google", "desconecta Google", "cierra Google"],
        action: function () {
            buscaEnGoogle.close();
            Responder("Google se ha cerrado");
        }
    },
    {
        indexes: ["Rafaelillo"],
        action: function () {
            buscaEnGoogle.close();
            abre_google.close();
            buscaEnYoutube.close();
            Responder("El navegador se ha cerrado");
            Home();
        }
    },
    {
        indexes: ["cierra las ventanas", "cierra Youtube", "cierra la ventana de Youtube"],
        action: function () {
            buscaEnYoutube.close();
            Responder("Youtube se ha cerrado");
        }
    },
    {
        indexes: ["cierra las ventanas", "cierra Gmail", "cierra la ventana de Gmail"],
        action: function () {
            buscaEnGmail.close();
            Responder("Gmail se ha cerrado");
        }
    },
    {
        indexes: ["cierra las ventanas", "cierra Facebook", "cierra la ventana de Facebook"],
        action: function () {
            buscaEnFacebook.close();
            Responder("Facebook se ha cerrado");
        }
    }
]);