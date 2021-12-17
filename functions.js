function OnAddItem(itemid_img)
{
    for (var it of Items)
    {
        if (it.img != itemid_img)
            continue;
        
        it.panier += parseInt(document.getElementById("input_" + itemid_img).value);
        UpdateItems();
        break;
    }
}

function OnRemoveItem(itemid_img)
{
    for (var it of Items)
    {
        if (it.img != itemid_img)
            continue;
        
        it.panier = 0;
        UpdateItems();
        break;
    }
}

function UpdateItems()
{
    var panier = "<div class=\"total\">";

    var prix = 0.0;
    for (const it of Items)
    {
        if (it.panier != 0)
            prix += it.panier * it.prix;
    }

    panier += "Total du panier : " + prix + '€';
    panier += "</div>";
    panier += "<div class=\"dir\">";

    for (const it of Items)
    {
        if (it.panier <= 0)
            continue;
        
        panier += "<div class=\"panier\">";

        panier += "<img src=" + it.img + ".jpg style=\"width: 12%; height:100%;\"> x" + it.panier;

        panier += ":  " + it.nom + " <i class=\"fas fa-trash-alt\" onclick=\"OnRemoveItem('" + it.img + "')\"></i>";

        panier += "</div>";
    }

    panier += "</div>";

    document.getElementById("panier").innerHTML = panier;
}