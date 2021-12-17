var Items = [
    {
        "nom": "Nounnous maron",
        "img": "IMG-20211121-WA0037",
        "prix": 10.0,
        "def": "un joli nounous maron avec un camera",

        "style_def": "class='c div'",
        "style_img": "style=\"width:90%; height:90%; margin: 2vh 0vh 1vh 2vh;\"",

        "panier": 0
    },
    {
        "nom": "Nounnous blanc",
        "img": "IMG-20211121-WA0036",
        "prix": 15.0,
        "def": "un joli nounous blanc avec un boole",

        "style_def": "class='c div'",
        "style_img": "style=\"width:90%; height:90%; margin: 2vh 0vh 1vh 2vh;\"",

        "panier": 0
    },
    {
        "nom": "Nounnous maron2",
        "img": "IMG-20211121-WA0038",
        "prix": 60.0,
        "def": "un joli nounous maron avec un foulard",

        "style_img": "style=\"margin: 2vh 2vh 1vh 2vh; height: 89%; width: 86%;\"",
        "style_def": "class='c div'",

        "panier": 0
    },
    
    {
        "nom": "Deux Nounnous maron et bleu",
        "img": "IMG-20211121-WA0045",
        "prix": 45.0,
        "def": "des jolis nounous maron et bleu avec un foulard",

        "style_def": "class='c div'",
        "style_img": "style=\"width:90%; height:90%; margin: 2vh 0vh 1vh 2vh;\"",


        "panier": 0
    },
    {
        "nom": "Nounnous maron2",
        "img": "IMG-20211121-WA0040",
        "prix": 30.0,
        "def": "un joli nounous maron avec un foulard",

        "style_def": "class='c div'",
        "style_img": "style=\"width:90%; height:90%; margin: 2vh 0vh 1vh 2vh;\"",

        "panier": 0
    },
    {
        "nom": "Nounnous maron3",
        "img": "IMG-20211121-WA0039",
        "prix": 20.0,
        "def": "un joli nounous maron avec un foulard",

        "style_img": "style=\"margin: 2vh 2vh 1vh 2vh; height: 89%; width: 86%;\"",
        "style_def": "class='c div'",

        "panier": 0
    },

    {
        "nom": "Nounnous maron1",
        "img": "IMG-20211121-WA0043",
        "prix": 55.0,
        "def": "un joli nounous maron avec un foulard",

        "style_def": "class='c div'",
        "style_img": "style=\"width:90%; height:90%; margin: 2vh 0vh 1vh 2vh;\"",


        "panier": 0
    },
    {
        "nom": "Nounnous maron2",
        "img": "IMG-20211121-WA0044",
        "prix": 40.0,
        "def": "un joli nounous maron avec un foulard",

        "style_def": "class='c div'",
        "style_img": "style=\"width:90%; height:90%; margin: 2vh 0vh 1vh 2vh;\"",

        "panier": 0
    },
    {
        "nom": "Nounnous maron3",
        "img": "IMG-20211121-WA0042",
        "prix": 25.0,
        "def": "un joli nounous maron avec un foulard",

        "style_img": "style=\"margin: 2vh 2vh 1vh 2vh; height: 89%; width: 86%;\"",
        "style_def": "class='c div'",

        "panier": 0
    }
];

var prodinf =   "<div class=\"t\" id='main_#img' style=\"text-align: center;\">"                        +
                    "#nom"                                                                              +
                    "<div class=\"a div\">"                                                             +
                        "<img src=\"#img.jpg\" #style_img>"                                             +
                        "<div class=\"b\" #style_prix>"                                                 +
                            "#prix€"                                                                    +
                        "</div>"                                                                        +
                    "<div #style_def>"                                                                  +
                        "#def"                                                                          +
                    "</div>"                                                                            +
                    "<div class=\"d div\">"                                                             +
                        "<input id='input_#img' style=\"max-width: 50%; margin: 0px 0px 0px -1px;\" type=\"number\" min=1 value=1>"  +
                        "<font size=\"+4\" onclick=\"OnAddItem('#img')\"> <i class=\"fas fa-cart-arrow-down\" style=\"color:olivedrab\"></i> </font>"  +
                    "</div>"                                                                            +
                    "</div>"                                                                            +
                "</div>";           

for (const obj of Items)
{
    var tmp = prodinf
        .replaceAll("#nom", obj.nom)
        .replaceAll("#img", obj.img)
        .replaceAll("#prix", obj.prix)
        .replaceAll("#def", obj.def)
        .replaceAll("#style_def", obj.style_def)
        .replaceAll("#style_img", obj.style_img)
        .replaceAll("#style_prix", obj.style_prix)
        ;
    document.write(tmp);
}