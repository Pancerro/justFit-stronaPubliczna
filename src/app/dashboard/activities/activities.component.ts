import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MatSidenav } from '@angular/material/sidenav';
export class Info {
  title: string;
  message: string;
  list: string[];

  constructor(title: string, message: string, date: string, list: string[]) {
    this.title = title;
    this.message = message;
    this.list = list;
  }
}
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  public info: Info = new Info(null, null, null, null);
  constructor(private dataService: DataServiceService) {
   this.dataService.getActivities() .subscribe(res=>{this.product=res
    this.product = this.product
    .map((item: { activityType: any; }) => item.activityType)
    .filter((value: any, index: any, self: string | any[]) => self.indexOf(value) === index)
    })
   }
  public  product: any[]=["Sztuki Walki","Aerobik","Zajecia Taneczne","Sporty Siłowe"];
  @ViewChild('sidenav', null) sidenav: MatSidenav;
  ngOnInit() {   
  }
  sideNaveOpenOneInfo(info: number) {
    switch (info) {
      case 1:
        this.info = new Info(null, null, null, []);
        this.info.title = this.product[1];
        this.info.message = "Jest to forma zajęć grupowych skierowana dowszystkich bez względu na wiek czy kondycje fizyczną. Oferowan  e formy ruchu i zestawy ćwiczeń są przyjemne, ciekawe i częstobardziej przypominają zabawę niż trening a jednocześnie mogą mieć działanie wspo  magające w przypadku różnorodnych schorzeń związanych z siedzącym trybem życia.W zależności od  typu zajęć jakie wybierzesz możesz nie tylko spalić nadmiar tkanki tłuszczowej i wyrzeźbić sylwetkę, ale też wyciszyć się, odpocząć lub wręcz przeciwnie - wyzwolić energię.";
        this.info.list.push("W ofercie znajdziesz więc:");
        this.info.list.push("zajęcia wzmacniające, które mają za zadanie poprawić twoją siłę i sprawność jednocześnie wpływając pozytywnie na wydolność organizmu;");
        this.info.list.push("zajęcia prozdrowotne, podczas których wykonujesz ćwiczenia łagodzące i zapobiegające bólom pleców, ćwiczenia, które nie obciążają stawów i usuwają napięcia mięśniowe;");
        this.info.list.push("zajęcia mentalne oraz relaksacyjne, które pomogą się zrelaksować i wyciszyć jednocześnie bardzo świadomie pracując z całym ciałem;");
        this.info.list.push("zajęcia taneczne, podczas których mocno popracujesz nad wydolnością organizmu przy okazji świetnie bawiąc się przy muzyce;");
        this.info.list.push("Bez względu na wybraną formę zajęć nasza kadra instruktorów zadba o to, by twój udział w nich był bezpieczny, przyjemny i efektywny.");
        this.info.list.push("Czego możesz oczekiwać od instruktora fitness?")
        this.info.list.push("Każde zajęcia rozpocznie rozgrzewką (by przygotować Twój organizm do wysiłku) i zakończy krótkim stretchingiem oraz wyciszeniem (by uspokoić organizm po treningu);");
        this.info.list.push("Zmotywuje całą grupę do maksymalnego wysiłku;");
        this.info.list.push("Będzie czuwał nad poprawnością wykonywanych ćwiczeń;");
        this.info.list.push("Zadba o to by trening na sali fitness był świetną zabawą dla każdego uczestnika;");
        this.info.list.push("Urozmaici wykonywane ćwiczenia, by nie stały się one dla uczestników nudne;");
        this.info.list.push("Po zajęciach w wolnej chwili chętnie odpowie na Twoje pytania;");
        this.info.list.push("Jeśli jesteś na zajęciach po raz pierwszy i zgłosisz to do Niego, zwróci na Ciebie szczególną uwagę, by pomóc Ci w wykonaniu ćwiczeń.");
        break;
      case 2:
        this.info = new Info(null, null, null, []);
        this.info.title = this.product[0];
        this.info.message = "Na siłowni możesz ćwiczyć samodzielnie lub pod okiem wykwalifikowanego trenera (trening personalny).  Każda siłownia jest wyposażona w maszyny do ćwiczeń, w sprzęt cardio, oraz w strefę wolnych ciężarów.Maszyny dostępne na siłowni są zaprojektowane w taki sposób, by trening wykonywany przy ich użyciu był bezpieczny a jednocześnie efektywny. Jeśli jesteś początkującym użytkownikiem siłowni, to właśnie one będą dla Ciebie najlepsze, bo za ich pomocą nauczysz się prawidłowej postawy podczas wykonywania ćwiczeń oraz właściwych zakresów ruchów. Nie oznacza to jednak, że korzystają z nich wyłącznie początkujący. Dobrze rozpisany plan treningu wykonywanego przy użyciu różnorodnych maszyn zapewni Ci kompletny trening całego ciała.Strefa maszyn cardio, to strefa ze sprzętem umożliwiającym intensywny trening wydolnościowy. Trening cardio wpływa na spalanie tkanki tłuszczowej, poprawę wydolności organizmu oraz regulację gospodarki hormonalnej. W zależności od intensywności i długości treningu osiągniesz różne cele treningowe. Strefa wolnych ciężarów, to jedna z bardziej wymagających stref na siłowni. Tutaj możesz przeprowadzić bardzo zróżnicowany trening. Korzystając z wolnych obciążeń samodzielnie decydujesz w jakim zakresie wykonasz ruch i jaką przyjmiesz postawę, dlatego prawidłowe wykonanie treningu w tej strefie wymaga wiedzy i doświadczenia, lub wsparcia doświadczonej osoby -trenera obecnego na siłowni.";
        this.info.list.push("Czego możesz oczekiwać od trenera obecnego na siłowni?");
        this.info.list.push("Czuwa nad tym by nikt z ćwiczących nie popełniał poważnych błędów podczas wykonywanych ćwiczeń;");
        this.info.list.push("Jest dostępny, by w każdej chwili podpowiedzieć jak prawidłowo korzystać ze sprzęt dostępnego na siłowni;");
        this.info.list.push("Wytłumaczy Ci w jaki sposób przeprowadzić prawidłowo cały trening;");
        this.info.list.push("Podpowie, które z dostępnych na siłowni sprzętów pomogą osiągnąć twój indywidualny cel treningowy;");
        this.info.list.push("Na Twoją prośbę może stworzyć plan treningowy, który ułatwi Ci przeprowadzenie kompleksowego treningu.");
        break;
      case 3:
        this.info = new Info(null, null, null, []);
        this.info.title = this.product[3];
        this.info.message = "TRENING PERSONALNY (ONE FOR ONE) Forma indywidualnych zajęć pod okiem specjalisty, która daje gwarancję realizacji celu jaki sobie postawiłeś. Wystarczy ,że określisz potrzeby dotyczące własnego wyglądu i formy fizycznej a trener przygotuje program treningowy oraz dietetyczny. Będzie czuwał nad jego realizacją i dopilnuje byś osiągnął co zamierzyłeś. Nie ma skuteczniejszego i szybszego sposobu realizacji Twojego celu niż trening personalny z trenerem S4.JAK WYGLĄDA TRENING PERSONALNY? Trener przeprowadza treningi z klientem czuwając nad poprawnością i skutecznością wykonywanych ćwiczeń. Przed każdym spotkaniem z Klientem trener rozpisuje plan treningowy w taki sposób, aby ćwiczący uniknął monotonii. Trener dba też o to, żeby Klient przez cały czas był zmotywowany i pełen zapału do osiągnięcia swojej wymarzonej formy i wyglądu.INDYWIDUALNY PROGRAM TRENINGOWY Przeprowadzając rozmowę z klientem trener dobiera odpowiedni dla jego potrzeb i możliwości program treningowy – może być on realizowany w fitness klubie, na basenie lub w plenerze. Dla uzyskania szybszych efektów trener ustala indywidualną dietę i suplementację.";
        this.info.list.push("Czego możesz oczekiwać od trenera personalnego?");
        this.info.list.push("Trener osobisty dostosuje plan treningu do Twoich potrzeb i możliwości.");
        this.info.list.push("Zaproponuje optymalny plan treningowy i dietetyczny, w taki sposób, aby nie wkradła się w niego monotonia i nuda.");
        this.info.list.push("Czuwa nad prawidłową techniką i skutecznością wykonywanych ćwiczeń, a w razie potrzeby eliminuje błędy.")
        this.info.list.push("Odpowiada na Twoje pytania dotyczące ćwiczeń, odżywiania, spędzania czasu w sposób aktywny.");
        this.info.list.push("Motywuje do wysiłku i dba o bezpieczeństwo wykonywanych ćwiczeń.");
        this.info.list.push("Pomaga maksymalnie wykorzystać każdą minutę Twojego cennego czasu.");
        this.info.list.push("Sprawia, że aktywność fizyczna jest przyjemną formą spędzania wolnego czasu.");
        break;
      case 4:
        this.info = new Info(null, null, null,[]);
        this.info.title =  this.product[2];
        this.info.message = "Korzystanie z sauny wpływa pozytywnie na relaks oraz regenerację. Naprzemienne nagrzewanie i schładzanie ciała jest bardzo korzystne dla układu krwionośnego i wpływa pozytywnie na odporność organizmu.W saunie skóra rozgrzewa się do ok. 40 stopni Celsjusza. Wydzielany pot ma zasadniczo za zadanie obronić organizm przed przegrzaniem. Zarazem wraz z nim z organizmu wydalane są toksyny i wszelkie zanieczyszczenia skóry. Po saunie skóra jest wyraźnie oczyszczona, lepiej ukrwiona (co nadaje jej ładny koloryt), bardziej gładka.Sauna należy do znanych od wieków zabiegów fizjoterapeutycznych z wykorzystaniem ciepła. Jest przede wszystkim metodą profilaktyczną, czyli przeznaczoną dla osób zdrowych. Pomaga łagodzić wiele drobnych dolegliwości, a nawet uzupełnia leczenie konkretnych schorzeń, jednak przed skorzystaniem z jej dobrodziejstw warto skonsultować się z lekarzem. Sauna po treningu jest dobrym sposobem na relaks i szybkie odzyskanie sił – wysoka temperatura rozluźnia ciało, łagodzi bóle mięśni i stawów. Błędem jest jednak wchodzenie do rozgrzanego pomieszczenia od razu po treningu. Zaraz po nim powinniśmy zastosować ćwiczenia schładzające (cool-down) oraz uzupełnić utracone płyny. W ten sposób nasz organizm odzyska równowagę, uspokoi się, odpocznie. Dopiero wtedy możemy we właściwy sposób skorzystać z dobrodziejstw sauny.";
        break;
    }
    this.sidenav.open()
  }
  changeColorFont(){
    document.querySelectorAll("P")
  }
}
