const translations = {
    en: {
      services: "Services",
      dailyUpdates: "Daily Updates",
      informations: "Informations",
      healthPost: "Health Post",
      map: "Map",
      contacts: "Contacts",
      welcome: "Welcome",
      municipality: "Fulhera Municipality",
      intro: "We are always ready to serve you. We are dedicated to working with honesty and full energy.",
      goButton: "Good To Go",
      aboutUs: "About Us",
      aboutUsContent: "Fulhera is a picturesque town located in the heart of Odisha, India. Its name is derived from the Sanskrit words 'Phool' (meaning flower) and 'Hera' (meaning abode). This beautiful name reflects the town's natural beauty, characterized by vibrant flora and lush greenery. It also symbolizes a peaceful and harmonious dwelling where people can thrive. The name Fulhera encapsulates its idyllic charm and serves as a reminder of its rich cultural heritage and natural splendor.",
      servicesTitle: "We Provide You the Best Services",
      publicSafety: "Public Safety",
      publicSafetyContent: "Provide information about emergency services, disaster preparedness, safety guidelines, community monitoring programs, and public alerts to ensure the safety and well-being of citizens.",
      transparency: "Transparency and Accountability",
      transparencyContent: "Build trust by making public records accessible and implementing mechanisms for citizen oversight.",
      infoResources: "Information and Resources",
      infoResourcesContent: "Provide valuable resources for citizens, including a municipal directory, FAQs, maps, and e-learning materials.",
      onlineServices: "Online Services",
      onlineServicesContent: "Offer various essential services online, such as property tax payments, birth and death certificate applications, and grievance redressal."
    },
    hi: {
      services: "सेवाएं",
      dailyUpdates: "दैनिक अपडेट",
      informations: "सूचनाएं",
      healthPost: "स्वास्थ्य केंद्र",
      map: "मानचित्र",
      contacts: "संपर्क",
      welcome: "स्वागत है",
      municipality: "फुलहेरा नगरपालिका",
      intro: "हम हमेशा आपकी सेवाओं के लिए तत्पर हैं। हम ईमानदारी और पूरी ऊर्जा के साथ काम करने के लिए समर्पित हैं।",
      goButton: "आगे बढ़ें",
      aboutUs: "हमारे बारे में",
      aboutUsContent: "फुलहेरा, ओडिशा, भारत के मध्य में स्थित एक सुरम्य शहर है। इसका नाम संस्कृत शब्द 'फूल' (अर्थात फूल) और 'हेरा' (अर्थात निवास) से लिया गया है। यह सुंदर नाम शहर की प्राकृतिक सुंदरता को दर्शाता है, जो जीवंत वनस्पतियों और हरी भरी हरियाली की विशेषता है। यह शांतिपूर्ण और सौहार्दपूर्ण निवास का प्रतीक भी है, एक ऐसी जगह जहां लोग फल-फूल सकें। फुलहेरा का नाम इसकी सुंदरता और समृद्ध सांस्कृतिक विरासत की याद दिलाता है।",
      servicesTitle: "हम आपको सर्वोत्तम सेवाएं प्रदान करते हैं",
      publicSafety: "सार्वजनिक सुरक्षा",
      publicSafetyContent: "आपातकालीन सेवाओं, आपदा तैयारी, सुरक्षा दिशानिर्देशों, सामुदायिक निगरानी कार्यक्रमों और सार्वजनिक अलर्ट के बारे में जानकारी प्रदान करें, ताकि नागरिकों की सुरक्षा और भलाई सुनिश्चित हो सके।",
      transparency: "पारदर्शिता और जवाबदेही",
      transparencyContent: "सार्वजनिक रिकॉर्ड सुलभ बनाकर और नागरिक निरीक्षण के लिए तंत्र लागू करके विश्वास बढ़ाएं।",
      infoResources: "सूचना और संसाधन",
      infoResourcesContent: "नागरिकों के लिए मूल्यवान संसाधन प्रदान करें, जिसमें नगरपालिका निर्देशिका, अक्सर पूछे जाने वाले प्रश्न, मानचित्र और ई-लर्निंग सामग्री शामिल हैं।",
      onlineServices: "ऑनलाइन सेवाएं",
      onlineServicesContent: "ऑनलाइन कई आवश्यक सेवाएं प्रदान करें, जैसे संपत्ति कर भुगतान, जन्म और मृत्यु प्रमाण पत्र आवेदन और शिकायत निवारण।"
    }
  };

  function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-key");
      if (translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });
  }