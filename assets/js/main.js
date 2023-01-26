/*

- radio Feld = 2mal

- input Feld = Nettobetrag

- output Feld = Ergenis aus Nettobetrag und radio Feld Auswahl
*/

//============= Elemente ins js holen
 const steuerAufschlagen = document.querySelector("#steuerAufschlagen")
 const steuerAbziehen = document.querySelector("#steuerAbziehen")
 const nettoBetrag = document.querySelector("#nettoBetrag")
 const mehrwertsteuer19 = document.querySelector("#mehrwertsteuer19")
 const mehrwertsteuer7 = document.querySelector("#mehrwertsteuer7")
 const mehrwertsteuerErgebnis = document.querySelector("#mehrwertsteuerErgebnis")
 const bruttobetragErgebnis = document.querySelector("#bruttobetragErgebnis")
 const bruttoEingabeBruttoBetrag = document.querySelector("#bruttoBetrag")
//============= Variabeln


 //============ Funktion
 function berechneMehrwertsteuer() {
    nettoBetragEingabe = Number(nettoBetrag.value)
    console.log(nettoBetragEingabe);
    bruttoBetragEingabe = Number(bruttoEingabeBruttoBetrag.value)
    if (steuerAufschlagen.checked && mehrwertsteuer19.checked) {
        const mwstAufschlagen19Bruttobetrag = (nettoBetragEingabe * 119) / 100
        mehrwertsteuerErgebnis.innerHTML = mwstAufschlagen19Bruttobetrag
        const mwstAufschlagen19Betrag = mwstAufschlagen19Bruttobetrag - nettoBetragEingabe
        bruttobetragErgebnis.innerHTML = mwstAufschlagen19Betrag
    }
    else if (steuerAufschlagen.checked && mehrwertsteuer7.checked) {
        const mwstAufschlagen7BruttoBetrag = (nettoBetragEingabe * 107) / 100
        console.log(mwstAufschlagen7BruttoBetrag);
        mehrwertsteuerErgebnis.innerHTML = mwstAufschlagen7BruttoBetrag
        console.log(mwstAufschlagen7BruttoBetrag);
        const mwstAufschlagen7Betrag = mwstAufschlagen7BruttoBetrag - nettoBetragEingabe
        bruttobetragErgebnis.innerHTML = mwstAufschlagen7Betrag
    }
    else if (steuerAbziehen.checked && mehrwertsteuer19.checked) {
        const mwstAbziehen19NettoBetrag = (bruttoBetragEingabe * 100) / 119
        mehrwertsteuerErgebnis.innerHTML = mwstAbziehen19NettoBetrag
        const mwstAbziehen19MehrwertsteuerBetrag = (bruttoBetragEingabe - mwstAbziehen19NettoBetrag)
        bruttobetragErgebnis.innerHTML = mwstAbziehen19MehrwertsteuerBetrag

    } 
    else if (steuerAbziehen.checked && mehrwertsteuer7.checked) {
        mwstAbziehen7BruttoBetrag = (bruttoBetragEingabe * 100) /107
        mehrwertsteuerErgebnis.innerHTML = mwstAbziehen7BruttoBetrag
        const mwstAbziehen7MehrwertsteuerBetrag = (bruttoBetragEingabe - mwstAbziehen7BruttoBetrag)
        bruttobetragErgebnis.innerHTML = mwstAbziehen7MehrwertsteuerBetrag
    }
 }