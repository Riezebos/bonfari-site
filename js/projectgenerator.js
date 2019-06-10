var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1coxz1sjyfQVltg3a1K0nMN-QM8JenZH79OPNpRciqKs/edit?usp=sharing';

function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                    callback: showInfo,
                    simpleSheet: true } )
}

window.addEventListener('DOMContentLoaded', init)
function showInfo(data, tabletop) {
    console.log(data);

    if (pagina == 'vrijwilligerspagina') {
        var itemsize = 'col-lg-6 col-md-8 col-sm-12'
    } else {
        var itemsize = 'col-lg-3 col-md-4 col-sm-6'
    }
    
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (data[j][pagina] === i.toString()) {
                var watermark = '';
                if (data[j].afgerond == 'x') {
                    watermark = '<div class="watermark">Afgerond</div>'
                }
                
                $('.post').append(
                    '<div class="'+itemsize+' portfolio-item">'
                    +'<a href="#project'+j+'" class="portfolio-link" data-toggle="modal">'
                    +'<div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-arrows-alt fa-3x"></i></div></div>'
                    +'<img src="/img/projecten/'+data[j].upload1+'" class="centered-and-cropped" alt="" width="100%" height="180">'
                    + watermark
                    +'</a><div class="portfolio-caption"><h4>'+data[j].project+'</h4></div>'
                );

                $('.modals').append(
                    '<div class="portfolio-modal modal fade" id="project'+j+'" tabindex="-1" role="dialog" aria-hidden="true">'
                    +'<div class="modal-content"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div>'
                    +'<div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body">'
                    +'<h2>'+data[j].project+'</h2>'
                    +'<img class="img-responsive img-centered" src="/img/projecten/'+data[j].upload2+'" alt="">'
                    +'<p class="text-justify" style="white-space: pre-wrap">'+data[j].tekst1+'</p>'
                    +'<p class="text-justify" style="white-space: pre-wrap"><a href="https://docs.google.com/spreadsheets/d/14tv5Ec2uGglHMDEBWIpuBpoosRTyQMOS3E5dNnbu6kE/edit?usp=sharing">Bekijk de begrotingen en realisaties van onze projecten.</a></p>'
                    +'</br><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Ga terug</button>'
                );
            }
        }
    }
    if (pagina == 'hoofdpagina') {
        $('.post').append(
            '<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'
            +'<a href="./projecten" class="portfolio-link" data-toggle="modal">'
            +'<div class="portfolio-hover"><div class="portfolio-hover-content"></div></div>'
            +'<img src="img/projecten/leeg.jpg" class="centered-and-cropped" alt="" width="100%" height="180">'
            +'</a><div class="portfolio-caption"><h4>Alle projecten</h4></div>'
        );
    }
}