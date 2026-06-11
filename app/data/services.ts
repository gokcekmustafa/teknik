export interface ServiceItem {
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  items: ServiceItem[];
}

export const services: Service[] = [
  {
    id: "enerji",
    slug: "enerji-aydinlatma",
    title: "Enerji & Aydınlatma",
    description: "Villa ve dairelerinize modern enerji altyapısı ve estetik aydınlatma montajları.",
    icon: "⚡",
    items: [
      {
        title: "Elektrikli Şarj İstasyonu Kurulumu & Beslemesi",
        shortDesc: "Elektrikli araçlar için ev tipi ve ticari şarj istasyonu kurulumu.",
        longDesc: "Elektrikli araç kullanımının yaygınlaşmasıyla birlikte evinizde veya iş yerinizde şarj istasyonu kurulumu büyük önem kazanmıştır. Profesyonel ekibimiz, aracınızın modeline ve mevcut elektrik altyapınıza uygun şarj istasyonu seçiminden montajına kadar anahtar teslim çözüm sunar. Sigorta panosundan şarj ünitesine kadar tüm besleme hatları uygun kesit ve standartlarda çekilir, topraklama ve kaçak akım koruması sağlanır.",
        benefits: ["Modelinize uygun şarj cihazı seçimi", "Sigorta panosundan besleme hattı çekimi", "Kaçak akım ve aşırı yük koruması", "Mobil uygulama ile uzaktan kontrol desteği"],
      },
      {
        title: "Bahçe Aydınlatma Altyapı ve Montaj İşleri",
        shortDesc: "Peyzajınıza uygun dekoratif ve fonksiyonel aydınlatma sistemleri.",
        longDesc: "Bahçenizin gece görünümünü tamamen değiştirecek profesyonel aydınlatma çözümleri sunuyoruz. Yürüyüş yolları, bitki grupları, su öğeleri ve oturma alanları için doğru ışıklandırma ile hem güvenliği hem de estetiği bir arada sağlıyoruz. Su altı aydınlatmalarından spot ışıklara, solar sistemlerden akıllı sensörlü aydınlatmalara kadar geniş ürün yelpazesiyle hizmetinizdeyiz.",
        benefits: ["Dekoratif peyzaj aydınlatması", "Yürüyş yolu ve merdiven aydınlatması", "Hareket sensörlü güvenlik ışıkları", "Su altı ve havuz aydınlatma sistemleri"],
      },
      {
        title: "Bulvar ve Sokak Arası Aydınlatma Direk Kurulumları",
        shortDesc: "Siteler ve açık alanlar için endüstriyel aydınlatma direk montajı.",
        longDesc: "Site içi yollar, bulvarlar ve ortak kullanım alanlarında ihtiyaç duyulan aydınlatma direklerinin kurulumunu gerçekleştiriyoruz. Direk temelinden kablolama ve montaja kadar tüm süreç ekiplerimiz tarafından yürütülür. LED teknolojisi ile enerji verimliliği sağlayan çözümlerimizle ortak alanlarınızı güvenli ve aydınlık hale getiriyoruz.",
        benefits: ["Galvanizli ve dekoratif direk seçenekleri", "LED armatürler ile enerji tasarrufu", "Topraklama ve yıldırımdan koruma", "Fotoselli ve zamanlayıcılı kontrol sistemleri"],
      },
    ],
  },
  {
    id: "iklimlendirme",
    slug: "iklimlendirme-tesisat",
    title: "İklimlendirme & Tesisat",
    description: "Yaşam alanınızın konforunu artıracak iklimlendirme ve su tesisat çözümleri.",
    icon: "🌡️",
    items: [
      {
        title: "Kombi Bakım, Onarım ve Teknik Servisi",
        shortDesc: "Tüm marka ve modellerde kombi bakım, arıza tespit ve onarım.",
        longDesc: "Kombinizin düzenli bakımı hem enerji verimliliği hem de uzun ömürlü kullanım için kritiktir. Sertifikalı teknisyenlerimiz tarafından gerçekleştirilen periyodik bakım hizmetimizde; brülör temizliği, gaz ayarı, genleşme tankı kontrolü, petek hava alma ve baca temizliği işlemleri titizlikle yapılır. Acil arıza durumlarında ise hızlı müdahale ekibimizle hizmetinizdeyiz.",
        benefits: ["Periyodik bakım paketleri", "Yedek parça ve onarım garantisi", "Enerji verimliliği ayarları", "7/24 acil müdahale desteği"],
      },
      {
        title: "Klima Montajı, Gaz Dolumu ve Tamiri",
        shortDesc: "Split, multi ve VRV sistemler için profesyonel klima hizmetleri.",
        longDesc: "Yaz aylarının vazgeçilmezi klimalarınızın montajından gaz dolumuna, periyodik bakımından arıza onarımına kadar tüm hizmetleri sunuyoruz. Dış ünite konumlandırmasından iç ünite montaj yüksekliğine, borulama ve izolasyondan elektrik bağlantılarına kadar tüm detaylar üretici standartlarına uygun şekilde gerçekleştirilir.",
        benefits: ["Duvar tipi, kaset tipi ve kanallı klima montajı", "Gaz kaçağı tespiti ve dolumu", "Periyodik bakım ve temizlik", "Tüm markalara yetkili servis desteği"],
      },
      {
        title: "Plastik Tesisat Çekimi & Kaynak Tamiratları",
        shortDesc: "PPRC ve PE kaynaklı sıhhi tesisat yenileme ve onarım.",
        longDesc: "Eski ve yıpranmış tesisatınızı modern PPRC boru sistemleriyle yeniliyoruz. Sıcak-soğuk su hatları, kalorifer tesisatı ve atık su sistemlerinde uzman kadromuzla sızıntı, basınç düşüklüğü ve tıkanma gibi sorunlara kalıcı çözümler üretiyoruz. Gizli tesisat çekimi ve duvar içi kaçak tespiti gibi hassas işlemlerde termal kamera ile noktasal müdahale sağlıyoruz.",
        benefits: ["PPRC kaynaklı sıhhi tesisat", "Kaçak tespiti ve onarımı", "Kollektörlü dağıtım sistemleri", "Basınç testi ve garanti"],
      },
      {
        title: "Bahçe Havuz Sistemleri & Hidrofor Bakımları",
        shortDesc: "Havuz filtrasyon, ısıtma ve hidrofor basınç sistemleri.",
        longDesc: "Bahçe havuzunuzun filtrasyon, ısıtma ve sirkülasyon sistemlerinin kurulumu ve bakımını üstleniyoruz. Su pompası, kum filtresi, tuz klor ünitesi ve ısı pompası gibi ekipmanların montajı ve periyodik bakımı uzman ekibimiz tarafından yapılır. Ayrıca su basıncı sorunlarına çözüm olarak hidrofor ve su deposu sistemleri kuruyoruz.",
        benefits: ["Havuz filtrasyon ve pompa sistemleri", "Hidrofor ve su deposu kurulumu", "Otomatik sulama sistemi altyapısı", "Periyodik havuz bakım hizmetleri"],
      },
    ],
  },
  {
    id: "otomasyon",
    slug: "dis-alan-otomasyon",
    title: "Dış Alan & Otomasyon",
    description: "Güvenlik ve fonksiyonelliği bir arada sunan çevre kapama ve otomasyon sistemleri.",
    icon: "🔐",
    items: [
      {
        title: "Motorlu & Raylı Garaj Kapısı Sistemleri",
        shortDesc: "Seksiyonel, panel ve raylı garaj kapısı montaj ve bakımı.",
        longDesc: "Villa ve site girişlerinde güvenlik ve konforu bir arada sunan motorlu garaj kapısı sistemleri kuruyoruz. Seksiyonel, panel, yukarı-açılır ve sürgülü kapı çözümlerimizle aracınızı konforlu bir şekilde park edebilirsiniz. Uzaktan kumanda, parmak izi okuyucu, mobil uygulama gibi çeşitli erişim seçenekleriyle akıllı ev sistemlerinize entegre çözümler sunuyoruz.",
        benefits: ["Seksiyonel ve panel kapı sistemleri", "Uzaktan kumanda ve mobil uygulama kontrolü", "Emniyet sensörleri ve otomatik durdurma", "Periyodik bakım ve yedek parça"],
      },
      {
        title: "Ahşap Çit ve Tel Örgü Uygulamaları",
        shortDesc: "Dekoratif ahşap çit, panel çit ve endüstriyel tel örgü çözümleri.",
        longDesc: "Mülkünüzün sınırlarını belirleyen ve mahremiyetinizi koruyan çit sistemlerinde geniş ürün yelpazesi sunuyoruz. Dekoratif ahşap çitlerden beton panele, endüstriyel tel örgüden ferforje korkuluklara kadar her türlü çit uygulamasını profesyonel ekiplerimizle gerçekleştiriyoruz. Estetik görünüm ve dayanıklılık ön planda tutulur.",
        benefits: ["Dekoratif ahşap ve panel çitler", "Endüstriyel tel örgü ve jiletli tel", "Beton bahçe duvarı ve sınır elemanları", "Galvanizli direk ve montaj aksesuarları"],
      },
      {
        title: "Duvar Üstü Ferforje (Plastik & Demir) Montajı",
        shortDesc: "Dekoratif ferforje korkuluk, küpeşte ve duvar üstü güvenlik sistemleri.",
        longDesc: "Duvar üstü güvenlik çözümlerinde estetik ve dayanıklılığı bir arada sunuyoruz. Dövme demir ferforje korkuluklardan PVC kaplamalı hafif sistemlere kadar geniş ürün yelpazemizle mülkünüzün çevre güvenliğini üst seviyeye çıkarıyoruz. Özel tasarım küpeşte, balkon korkuluğu ve merdiven korkulukları da talebinize göre üretilir.",
        benefits: ["Özel tasarım ferforje korkuluklar", "PVC kaplamalı hafif sistemler", "Balkon ve merdiven korkulukları", "Paslanmaz çelik ve alüminyum seçenekler"],
      },
      {
        title: "Özel Tasarım Bahçe Pergole Yapımı",
        shortDesc: "Ahşap, alüminyum ve polikarbonat pergole sistemleri.",
        longDesc: "Bahçenizde gölgelik ve oturma alanı oluşturmak için özel tasarım pergole sistemleri üretiyoruz. Ahşap, alüminyum ve polikarbonat malzeme seçenekleriyle mülkünüzün mimarisine uygun, fonksiyonel ve estetik pergoleler tasarlıyoruz. Otomatik açılır-kapanır tente sistemleri ve LED aydınlatma entegrasyonu da mevcuttur.",
        benefits: ["Ahşap, alüminyum ve polikarbonat seçenekler", "Otomatik tente ve gölgelendirme sistemleri", "LED aydınlatma entegrasyonu", "Mevcut bahçe dekorasyonuna uyumlu tasarım"],
      },
    ],
  },
  {
    id: "yapi",
    slug: "yenileme-izolasyon",
    title: "Yenileme & İzolasyon",
    description: "Dış etkenlere karşı koruma ve estetik görünüm kazandıran yapı uygulamaları.",
    icon: "🏗️",
    items: [
      {
        title: "Seramik, Granit ve Mermer Döşeme İşleri",
        shortDesc: "İç ve dış mekanlar için profesyonel seramik, granit ve mermer döşeme.",
        longDesc: "Yaşam alanlarınıza değer katan seramik, granit ve mermer döşeme işlerinde uzman kadromuzla hizmetinizdeyiz. Banyo, mutfak, salon, balkon ve dış cephe gibi her türlü alanda şap atma, su yalıtımı, derz dolgu ve parlatma işlemleri titizlikle gerçekleştirilir. Hexagon, balıksırtı gibi özel döşeme desenleri de talebinize göre uygulanır.",
        benefits: ["Seramik, granit, mermer ve fayans döşeme", "Su yalıtımı ve şap uygulaması", "Özel desen ve dekoratif döşeme", "Derz dolgu, parlatma ve sızdırmazlık"],
      },
      {
        title: "Dış Cephe & İç Cephe Alçı, Sıva ve Boya İşleri",
        shortDesc: "Alçı sıva, saten alçı, kaba sıva ve dekoratif boya uygulamaları.",
        longDesc: "Mülkünüzün iç ve dış cephesinde profesyonel sıva ve boya hizmetleri sunuyoruz. Alçı sıva, saten alçı, kaba sıva, dış cephe ısı yalıtım sıvası ve dekoratif boya uygulamalarında uzman ekibimizle kusursuz yüzeyler elde ediyoruz. Silikonlu boyalar, dokulu sıvalar ve özel renk karışımları ile mekanınıza karakter katıyoruz.",
        benefits: ["Alçı sıva ve saten alçı uygulaması", "Dış cephe ısı yalıtım sıvası (mantolama)", "Silikonlu ve silikatlı boyalar", "Dekoratif sıva ve özel doku uygulamaları"],
      },
      {
        title: "Çatı İzolasyonu & Kiremit Aktarma ve Tamiri",
        shortDesc: "Isı ve su yalıtımı, kiremit onarımı ve çatı yenileme.",
        longDesc: "Çatınızda oluşan su sızıntıları, ısı kaybı ve kiremit hasarları için kapsamlı çözümler sunuyoruz. Çatı izolasyonu, kiremit aktarma, membran uygulaması ve çatı onarımı gibi tüm işlemler uzman ekiplerimiz tarafından gerçekleştirilir. Isı yalıtımı ile enerji faturalarınızı düşürürken, su yalıtımı ile çatınızı nem ve rutubete karşı koruyoruz.",
        benefits: ["Isı yalıtımı (taş yünü, cam yünü, EPS)", "Su yalıtımı ve membran uygulaması", "Kiremit aktarma ve onarım", "Çatı iskelesi ve güvenlik önlemleri"],
      },
    ],
  },
];
