function kiir(param) {
    var li = document.createElement("li");
    li.innerHTML = param + "";
    document.getElementById("felsorol").appendChild(li);
}

var ContactManager_Contacts = navigator.mozContacts;

//Új elem hozzáadása a névjegyzékhez
var contactData = {
    givenName: ["József"],
    familyName: ["Fülöp"],
    nickname: ["Fül"]
};

var mozContact_person1 = new mozContact(contactData);
var saving1 = ContactManager_Contacts.save(mozContact_person1);

saving1.onsuccess = function () {
    console.log("Sikeres hozzáadás!");
    kiir("Sikeres hozzáadás!");
};

saving1.onerror = function () {
    console.log("Sikertelen hozzáadás!");
    kiir("Sikertelen hozzáadás!");
};


var contactData2 = {
    givenName: ["Zsolt"],
    familyName: ["Burzás"],
    nickname: ["Zsolti"],
    tel: [{type: ["Otthoni"], pref: "true", value: "+36303392056", carrier: "T-Mobile"}]
};

var mozContact_person2 = new mozContact(contactData2);

var saving2 = ContactManager_Contacts.save(mozContact_person2);

saving2.onsuccess = function () {
    console.log("Sikeres hozzáadás!");
    kiir("Sikeres hozzáadás!");
};

saving2.onerror = function () {
    console.log("Sikertelen hozzáadás!");
    kiir("Sikertelen hozzáadás!");
};

/*var Kreq1 = ContactManager_Contacts.getAll ();
 Kreq1.onsuccess = function () {
 if (this.result) {
 console.log ("Vezetéknév: " + this.result.familyName + " Keresztnév: " + this.result.givenName + " Becenév: " + this.result.nickname);
 this.continue ();
 }
 };*/

/*var filter = {
 filterValue: "Burzás",
 filterBy: ["familyName"],
 filterOp: "equals"
 };
 
 var Kreq2 = ContactManager_Contacts.find (filter);
 Kreq2.onsuccess = function () {
 for (var i = 0; i < this.result.length; i++) {
 console.log ("V: " + this.result [i].familyName + " K: " + this.result [i].givenName + "B: " + this.result [i].nickname);
 var TReq1 = ContactManager_Contacts.remove (this.result [i].id);
 TReq1.onsuccess = function () {
 console.log ("Sikerült a törlés :-)");
 }
 
 TReq1.onerror = function () {
 console.log ("Nem Sikerült a törlés :-(");
 }
 }
 
 };
 
 Kreq2.onerror = function (err) {
 console.log ("Error van!" + err);
 
 };*/

/*var TReq2 = ContactManager_Contacts.clear ();
 TReq2.onsuccess = function () {
 console.log ("Sikerült a törlés :-)");
 }
 
 TReq2.onerror = function () {
 console.log ("Nem Sikerült a törlés :-(");
 }*/

/*var Kreq3 = ContactManager_Contacts.getCount ();
 Kreq3.onsuccess = function () {
 console.log ("Sikerült a lekérés :-) " + this.result);
 }
 
 Kreq3.onerror = function () {
 console.log ("Nem Sikerült a lekérés :-(");
 }*/
