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
    id: "taahhut",
    slug: "insaat-taahhut",
    title: "İnşaat Taahhüt",
    description: "Kaba inşaattan anahtar teslime villa, daire ve ticari alanlarda proje bazlı taahhüt.",
    icon: "🏢",
    items: [
      {
        title: "Anahtar Teslim İnşaat & Tadilat",
        shortDesc: "Proje, ruhsat ve tüm imalatlar dahil anahtar teslim taahhüt.",
        longDesc: "Villa, daire ve ticari alanlarda anahtar teslim taahhüt üstleniyoruz. Proje ve ruhsat süreçlerinden kaba inşaat, tesisat, kaplama ve ince işçiliğe kadar tüm imalatlar tek sözleşme ve tek muhatapla yönetilir. Keşif sonrası net metraj, malzeme listesi ve iş programı hazırlanır, yazılı taahhüt ile zamanında teslim edilir.",
        benefits: ["Tek sözleşme, tek muhatap", "Proje ve metrajlı keşif", "Tüm imalatlar dahil anahtar teslim", "Yazılı teslim süresi garantisi"],
      },
      {
        title: "Kaba İnşaat & Betonarme Uygulamaları",
        shortDesc: "Temel, perde, kolon-kiriş ve döşeme betonarme imalatları.",
        longDesc: "Kaba inşaat aşamasında temel, perde duvar, kolon, kiriş ve döşeme betonarme imalatlarını projeye uygun şekilde gerçekleştiriyoruz. Demir, kalıp ve beton ekipleri koordineli çalışır, şantiye şefi kontrolünde kot, aks ve donatı detayları hassasiyetle uygulanır. Su yalıtımı ve şap ile kaba inşaat eksiksiz kapatılır.",
        benefits: ["Projeye uygun betonarme imalat", "Demir-kalıp-beton koordinasyonu", "Aks, kot ve donatı kontrolü", "Su yalıtımlı kaba teslim"],
      },
      {
        title: "Proje Yönetimi & Şantiye Taahhüdü",
        shortDesc: "İş programı, hakediş ve saha koordinasyonu ile taahhüt yönetimi.",
        longDesc: "Taahhüt işlerinde iş programı, hakediş, satın alma ve saha koordinasyonunu profesyonelce yönetiyoruz. Günlük saha raporu, haftalık ilerleme takibi ve malzeme sevkiyat planıyla şantiye tertibi korunur. Tüm alt yükleniciler BBB İnşaat sorumluluğunda tek elden koordine edilir, bütçe ve süre kontrol altında tutulur.",
        benefits: ["İş programı ve hakediş takibi", "Alt yüklenici tek elden yönetimi", "Günlük saha raporu ve kontrol", "Bütçe ve süre garantisi"],
      },
    ],
  },
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
      {
        title: "Elektrik Uygulaması",
        shortDesc: "Sigorta, priz, anahtar ve zayıf akım elektrik tesisatı uygulamaları.",
        longDesc: "Villa ve dairelerinizde tüm elektrik altyapısını standartlara uygun şekilde kuruyor ve yeniliyoruz. Sigorta panosu yenileme, hat çekimi, priz-anahtar montajı, LED spot ve aydınlatma tesisatı ile birlikte internet, uydu ve kamera zayıf akım altyapısı da anahtar teslim tamamlanır. Kaçak akım, topraklama ve regülasyon testleri ile güvenli teslim sağlanır.",
        benefits: ["Sigorta panosu kurulum ve yenileme", "Priz, anahtar ve aydınlatma tesisatı", "Zayıf akım (internet, uydu, kamera) altyapısı", "Topraklama ve kaçak akım testli teslim"],
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
        title: "Dış Cephe & İç Cephe Alçı, Sıva ve Boya İşleri",
        shortDesc: "Alçı sıva, saten alçı, kaba sıva ve dekoratif boya uygulamaları.",
        longDesc: "Mülkünüzün iç ve dış cephesinde profesyonel sıva ve boya hizmetleri sunuyoruz. Alçı sıva, saten alçı, kaba sıva, dış cephe ısı yalıtım sıvası ve dekoratif boya uygulamalarında uzman ekibimizle kusursuz yüzeyler elde ediyoruz. Silikonlu boyalar, dokulu sıvalar ve özel renk karışımları ile mekanınıza karakter katıyoruz.",
        benefits: ["Alçı sıva ve saten alçı uygulaması", "Dış cephe ısı yalıtım sıvası (mantolama)", "Silikonlu ve silikatlı boyalar", "Dekoratif sıva ve özel doku uygulamaları"],
      },
      {
        title: "Alçıpan Uygulaması",
        shortDesc: "Bölme duvar, asma tavan, niş ve gizli ışık bandı alçıpan sistemleri.",
        longDesc: "Mekanlarınıza modern ve estetik bir görünüm kazandıran alçıpan uygulamalarında uzmanız. Bölme duvar, asma tavan, TV ünitesi nişi, gizli ışık bandı ve akustik alçıpan çözümleri projenize özel ölçülendirilir. Metal konstrüksiyon, derz bandı ve saten alçı ile pürüzsüz yüzeyler oluşturulup boyaya hazır teslim edilir.",
        benefits: ["Bölme duvar ve asma tavan sistemleri", "Gizli ışık bandı ve niş imalatı", "Neme dayanıklı ve yangına dayanıklı levha seçenekleri", "Saten alçı ile boyaya hazır kusursuz yüzey"],
      },
      {
        title: "Çatı İzolasyonu & Kiremit Aktarma ve Tamiri",
        shortDesc: "Isı ve su yalıtımı, kiremit onarımı ve çatı yenileme.",
        longDesc: "Çatınızda oluşan su sızıntıları, ısı kaybı ve kiremit hasarları için kapsamlı çözümler sunuyoruz. Çatı izolasyonu, kiremit aktarma, membran uygulaması ve çatı onarımı gibi tüm işlemler uzman ekiplerimiz tarafından gerçekleştirilir. Isı yalıtımı ile enerji faturalarınızı düşürürken, su yalıtımı ile çatınızı nem ve rutubete karşı koruyoruz.",
        benefits: ["Isı yalıtımı (taş yünü, cam yünü, EPS)", "Su yalıtımı ve membran uygulaması", "Kiremit aktarma ve onarım", "Çatı iskelesi ve güvenlik önlemleri"],
      },
    ],
  },
  {
    id: "kaplama",
    slug: "kaplama-uygulamalari",
    title: "Kaplama Uygulamaları",
    description: "Zemin ve duvarlarda seramik, mermer ve şap ile estetik ve dayanıklı kaplama çözümleri.",
    icon: "🧱",
    items: [
      {
        title: "Seramik Uygulaması",
        shortDesc: "Banyo, mutfak ve ıslak hacimlerde seramik ve fayans kaplama.",
        longDesc: "Banyo, mutfak, balkon ve ıslak hacimlerde seramik kaplamayı hassas terazide ve estetik derz aralıklarıyla uyguluyoruz. Su yalıtımı, eğim ve derz dolgu detayları eksiksiz tamamlanır. Metro, hexagon ve balıksırtı gibi modern desenlerde uygulama yapılır, köşe profilleri ve silikon detayları ile kusursuz bitirim sağlanır.",
        benefits: ["Su yalıtımı ve eğimli döşeme", "Modern desen ve derz uygulaması", "Köşe profili ve silikon bitirim", "Kaymaz ve kolay temizlenen yüzey"],
      },
      {
        title: "Mermer Uygulaması",
        shortDesc: "Basamak, tezgah, denizlik ve zemin mermer kaplama.",
        longDesc: "Doğal mermerin zarafetini yaşam alanlarınıza taşıyoruz. Basamak, denizlik, tezgah, şömine ve zemin kaplamalarında ocaktan seçilmiş mermerler ölçüsünde kesilir, cilalanır ve monte edilir. Emprenye ve parlatma ile leke ve çizilmeye karşı koruma sağlanır, uzun yıllar ilk günkü görünüm korunur.",
        benefits: ["Basamak, denizlik ve tezgah kaplama", "Cilalı ve honlu yüzey seçenekleri", "Emprenye ile leke koruması", "Özel kesim ve desen uyumu"],
      },
      {
        title: "Şap Uygulaması",
        shortDesc: "Tesviye, eğim ve ısı yalıtımlı şap uygulamaları.",
        longDesc: "Seramik, parke ve mermer öncesi zemini kusursuz hale getiren şap uygulamalarını lazer terazide gerçekleştiriyoruz. Tesviye şapı, eğim şapı ve şap üstü ısı/ses yalıtımı seçenekleriyle alt zemin sağlamlaştırılır. Hızlı kuruyan ve çatlamaya dirençli harçlarla zaman kaybı olmadan kaplamaya hazır hale getirilir.",
        benefits: ["Lazer terazide tesviye şapı", "Islak hacim eğim şapı", "Çatlak önleyici fiber katkılı harç", "Hızlı kuruma ve kaplamaya hazır teslim"],
      },
      {
        title: "İnce İşçilik Uygulaması",
        shortDesc: "Süpürgelik, silikon, derz ve detay tamamlama işçilikleri.",
        longDesc: "Kaba imalat sonrası farkı ortaya koyan ince işçilik detaylarını titizlikle tamamlıyoruz. Süpürgelik montajı, silikon çekimi, derz yenileme, fuga, mastik ve birleşim detayları milimetrik hassasiyetle yapılır. Tüm yüzeyler temiz teslim edilir, göz yoran kusurlar ortadan kalkar ve mekan profesyonel bir bitirim kazanır.",
        benefits: ["Süpürgelik ve kartonpiyer montajı", "Silikon, mastik ve derz yenileme", "Kapı, pencere birleşim detayları", "Temiz ve kusursuz bitirim teslimi"],
      },
    ],
  },
  {
    id: "metal-ahsap",
    slug: "metal-ahsap-uygulamalari",
    title: "Metal & Ahşap Uygulamaları",
    description: "Paslanmaz, demir ve mobilya imalatında ölçüye özel dayanıklı çözümler.",
    icon: "🔨",
    items: [
      {
        title: "Paslanmaz Uygulaması",
        shortDesc: "Korkuluk, küpeşte, tezgah ve dekoratif paslanmaz imalat.",
        longDesc: "Paslanmaz çelikte estetik ve dayanıklılığı bir arada sunuyoruz. Merdiven korkuluğu, balkon küpeştesi, bahçe kapısı, mutfak tezgahı ve banyo aksesuarlarında 304 kalite paslanmaz malzeme kullanılır. Hassas kaynak ve polisaj ile pürüzsüz, lekesiz ve uzun ömürlü yüzeyler elde edilir, dış mekanda paslanma yapmaz.",
        benefits: ["304 kalite paslanmaz malzeme", "Korkuluk, küpeşte ve kapı imalatı", "Hassas kaynak ve ayna polisaj", "Dış mekanda paslanmaz garanti"],
      },
      {
        title: "Demir Kaynak Uygulaması",
        shortDesc: "Taşıyıcı, korkuluk ve özel demir doğrama kaynak işçiliği.",
        longDesc: "Taşıyıcı konstrüksiyon, ferforje korkuluk, kapı, pencere korkuluğu ve özel demir doğramalarda profesyonel kaynak işçiliği sunuyoruz. Elektro ve gaz altı kaynağı ile sağlam birleşimler oluşturulur, antipas ve boya ile koruma sağlanır. Statik gerektiren işlerde projeye uygun kesit ve detay hesaplanır.",
        benefits: ["Elektro ve gaz altı kaynak", "Taşıyıcı ve korkuluk imalatı", "Antipas ve fırın boya koruması", "Projeye uygun statik kesit"],
      },
      {
        title: "Mobilya Uygulaması",
        shortDesc: "Ölçüye özel mutfak, dolap, vestiyer ve ahşap mobilya imalatı.",
        longDesc: "Ev ve ofislerinize özel ölçülerde mobilya imalatı yapıyoruz. Mutfak dolabı, vestiyer, gömme dolap, TV ünitesi ve banyo dolaplarında lake, membran ve ahşap kaplama seçenekleri sunulur. Ray, menteşe ve aksesuarlarda birinci sınıf donanım kullanılır, montaj sonrası ayar ve hizalama ile sorunsuz kullanım sağlanır.",
        benefits: ["Ölçüye özel mutfak ve dolap imalatı", "Lake, membran ve ahşap kaplama", "Frenli ray ve soft-close menteşe", "Yerinde montaj ve ayarlı teslim"],
      },
    ],
  },
];
