console.log("Page loaded");

document.addEventListener("DOMContentLoaded", function () {
    const quizPopup = document.getElementById('quizPopup');
    const openBtn = document.getElementById('openQuizBtn');
    const closeBtn = document.getElementById('closeQuizBtn');
    const quiz = document.getElementById('quiz');
    const questionText = document.getElementById('questionText');
    const answersDiv = document.getElementById('answers');
    const nextBtn = document.getElementById('nextBtn');
    const resultDiv = document.getElementById('result');
    const scoreText = document.getElementById('scoreText');
  
    let currentQuestion = 0;
    let score = 0;
  
    const questions = [
      {
        question: "Which movement in the early 2010s called for economic equality with the slogan 'We are the 99%'?",
        answers: ["Arab Spring", "Occupy Wall Street", "Brexit"],
        correct: "Occupy Wall Street"
      },
      {
        question: "Which platform became dominant for music streaming in the 2010s?",
        answers: ["Napster", "Spotify", "Pandora"],
        correct: "Spotify"
      },
      {
        question: "Which social movement began with a hashtag to expose sexual harassment and abuse?",
        answers: ["#BlackLivesMatter", "#Occupy", "#MeToo"],
        correct: "#MeToo"
      },
      {
        question: "Which fashion trend became popular in the 2010s for blending workout clothes with everyday outfits?",
        answers: ["Normcore", "Athleisure", "Boho"],
        correct: "Athleisure"
      },
      {
        question: "Which trendy green food became a symbol of millennial eating habits?",
        answers: ["Kale chips", "Matcha lattes", "Avocado toast"],
        correct: "Avocado toast"
      },
      {
        question: "What virtual assistant launched by Amazon became popular in homes during the 2010s?",
        answers: ["Cortana", "Alexa", "Siri"],
        correct: "Alexa"
      },
      {
        question: "Which athlete took a knee during the national anthem to protest racial injustice?",
        answers: ["LeBron James", "Colin Kaepernick", "Usain Bolt"],
        correct: "Colin Kaepernick"
      }
    ];
  
    openBtn.onclick = () => {
      quizPopup.style.display = 'block';
      loadQuestion();
    };
  
    closeBtn.onclick = () => {
      quizPopup.style.display = 'none';
    };
  
    window.onclick = e => {
      if (e.target === quizPopup) quizPopup.style.display = 'none';
    };
  
    function loadQuestion() {
      const q = questions[currentQuestion];
      questionText.textContent = q.question;
      answersDiv.innerHTML = "";
      answersDiv.classList.add("fade");
  
      q.answers.forEach(answer => {
        const label = document.createElement("label");
        label.innerHTML = `
          <input type="radio" name="answer" value="${answer}">
          ${answer}
        `;
        answersDiv.appendChild(label);
        answersDiv.appendChild(document.createElement("br"));
      });
  
      nextBtn.style.display = "none";
    }
  
    answersDiv.addEventListener("change", () => {
      nextBtn.style.display = "inline-block";
    });
  
    nextBtn.onclick = () => {
      const selected = document.querySelector('input[name="answer"]:checked');
      if (!selected) return;
  
      if (selected.value === questions[currentQuestion].correct) {
        score++;
      }
  
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    };
  
    function showResult() {
      quiz.style.display = "none";
      resultDiv.style.display = "block";
      scoreText.textContent = `You got ${score} out of ${questions.length} correct.`;
    }
  });

  function updateContent(topic) {
    const content = topicsContent[topic];
    if (!content) return;
  
    // Clear placeholder message if it exists
    const placeholder = document.getElementById("placeholderMessage");
    if (placeholder) {
      placeholder.remove();
    }
  
    mainContent.innerHTML = ""; // Clear existing content
  
    content.forEach(entry => {
      const section = document.createElement("section");
      section.className = "box media-text fade-in"; // Add fade-in class
  
      section.innerHTML = `
        <div class="media">${entry.media}</div>
        <div class="text">${entry.text}</div>
      `;
      mainContent.appendChild(section);
    });
  }

  const topicsContent = {
    history: [
      {
        media: "<img src='brexit_flag.jpg' style='width:100%; border-radius:4px;'>",
        text: `
      <ul>
       <li><strong>Arab Spring & Occupy Wall Street:</strong> The early 2010s were marked by massive protests. The Arab Spring swept across the Middle East and North Africa, toppling regimes and demanding democratic reforms. Meanwhile, Occupy Wall Street in the U.S. called attention to economic inequality and corporate power with the slogan “We are the 99%.”</li>

       <li><strong>Brexit:</strong> In 2016, the United Kingdom voted to leave the European Union. This historic decision triggered years of political turmoil and negotiation. It also exposed deep divisions within British society on issues like identity, immigration, and globalization.</li>

       <li><strong>Social Media Activism:</strong> Movements like Black Lives Matter and #MeToo were powered by platforms like Twitter, Facebook, and Instagram. Social media became not just a tool for connection, but a weapon for social justice. Hashtags turned into rallying cries and enabled grassroots movements to reach millions.</li>

       <li><strong>Climate Change Action:</strong> The Paris Agreement of 2015 was a major global effort to combat climate change. Signed by nearly 200 countries, it aimed to reduce carbon emissions and limit global warming. Youth activists like Greta Thunberg brought urgency to the issue through viral campaigns and climate strikes.</li>

       <li><strong>Rise of Nationalism:</strong> Across Europe, the U.S., and beyond, nationalist and populist movements gained momentum. Leaders promised to "put their countries first" while often criticizing immigration and global cooperation. This shift challenged traditional politics and reshaped elections worldwide.</li>
       </ul>
      `
      }
    ],

    music: [
      {
        media: "<img src='album.jpg' style='width:75%; border-radius:4px;'>",
        text: `
      <ul>
       <li><strong>Streaming Dominates:</strong> Services like Spotify, Apple Music, and YouTube reshaped how people discovered and consumed music. Playlists replaced albums, and users could access millions of songs on demand. This disrupted the traditional music industry and empowered independent artists.</li>

       <li><strong>Genre-Blending:</strong> The 2010s saw artists blurring genre lines like never before. Hip hop mixed with pop, electronic with indie, and cultural fusion became the new norm. This diversity led to unique sounds and broader musical identities.</li>

       <li><strong>Major Artists:</strong> Icons like Beyoncé, Kendrick Lamar, Drake, Taylor Swift, and Billie Eilish defined the sound and style of the decade. Their music wasn’t just entertainment — it sparked conversations, broke records, and influenced fashion, politics, and identity.</li>

       <li><strong>Viral Trends:</strong> Platforms like TikTok and Vine helped unknown artists skyrocket to fame overnight. Songs became hits because they inspired dance challenges, memes, or trends. This changed how songs were marketed and discovered.</li>

       <li><strong>K-pop Explosion:</strong> BTS, Blackpink, and other Korean acts achieved global superstardom. Their polished visuals, synchronized dance, and massive fan engagement brought K-pop into the Western mainstream. Fans played a big role through streaming campaigns and social media support.</li>
       </ul>
      `
      }
    ],

    politics: [
      {
        media: "<img src='Trump_rally.jpg' style='width:90%; border-radius:8px;'>",
        text: `
      <ul>
       <li><strong>Trump and Populism:</strong> Donald Trump's 2016 election symbolized a global shift toward populist, outsider politics. His campaign focused on nationalism, media distrust, and shaking up the political system. Similar leaders rose in Brazil, Hungary, and the Philippines.</li>

       <li><strong>Black Lives Matter:</strong> After the killing of Trayvon Martin and later George Floyd, BLM grew into a global civil rights movement. It demanded racial justice, police reform, and accountability. Protests took place in hundreds of cities, amplified by viral footage and grassroots activism.</li>

       <li><strong>#MeToo Movement:</strong> What began as a hashtag became a global reckoning against sexual harassment and abuse. Survivors shared stories across industries, leading to real consequences for powerful figures. It sparked new laws, workplace reforms, and cultural shifts around gender dynamics.</li>

       <li><strong>LGBTQ+ Progress:</strong> The 2010s saw historic victories like the legalization of same-sex marriage in the U.S. and growing acceptance around the world. Media representation improved, and more public figures came out, helping break stigmas and stereotypes.</li>

       <li><strong>Online Activism:</strong> Political engagement moved online with viral petitions, digital protests, and livestreamed events. Hashtags turned into movements, and apps like Change.org helped causes gain traction quickly. This digital power gave voice to individuals and marginalized groups.</li>
       </ul>
       `
      
      }
    ],
    fashion: [
      {
        media: "<img src='2010_Fashion.jpg' style='width:90%; border-radius:8px;'>",
        text: `
      <ul>
       <li><strong>Streetwear Boom:</strong> Once underground, streetwear became luxury thanks to brands like Supreme and Off-White. Collaborations with Nike, Louis Vuitton, and artists made it high fashion. Drop culture and resale markets exploded online.</li>

       <li><strong>90s/Y2K Revival:</strong> Chokers, cargo pants, bucket hats, and neon came back in full force. Gen Z and millennials embraced nostalgia, blending vintage pieces with modern fits. The internet helped recycle old trends into new fashion statements.</li>

       <li><strong>Athleisure Everywhere:</strong> From yoga pants to performance sneakers, gymwear became all-day fashion. Brands like Lululemon and Adidas popularized the look. Comfort and functionality became just as important as style.</li>

       <li><strong>Influencer Takeover:</strong> Instagram and YouTube stars replaced traditional models and magazines. Trends could start from a single post or TikTok video. Fashion became more personal, accessible, and fast-moving.</li>

       <li><strong>Sustainability Rises:</strong> As fast fashion grew, so did awareness of its environmental impact. Shoppers started supporting thrift stores, slow fashion, and ethical brands. Sustainability became both a buzzword and a mission for younger consumers.</li>
       </ul>
       `
      }
    ],
    food: [
      {
        media: "<img src='Avocado_toast.jpg' style='width:90%; border-radius:8px;'>",
        text: `
      <ul>
       <li><strong>Health Trends Take Over:</strong> Diets like veganism, keto, paleo, and gluten-free became mainstream. Wellness culture fueled grocery and restaurant innovation. People wanted food that felt good for their bodies — and their Instagram feeds.</li>

       <li><strong>Food as Art:</strong> Avocado toast, rainbow bagels, and unicorn lattes were as much for photos as they were for flavor. Presentation mattered more than ever. Restaurants adapted by designing dishes for the camera.</li>

       <li><strong>Delivery on Demand:</strong> Uber Eats, DoorDash, and Deliveroo transformed food access. Users could get sushi, bubble tea, or gourmet burgers delivered within minutes. This convenience reshaped both dining habits and restaurant business models.</li>

       <li><strong>The Rise of Bowls:</strong> Meals like poke, acai, and smoothie bowls exploded in popularity. They combined freshness, color, and nutrition. They also fit perfectly into the "clean eating" and customization trend.</li>

       <li><strong>Plant-Based Revolution:</strong> Brands like Beyond Meat and Impossible Foods brought meat-free options to the mainstream. Fast food chains embraced vegan burgers and sausage. These innovations offered taste and sustainability in one bite.</li>
       </ul>
       `      
      }
    ],
    technology: [
      {
        media: "<img src='early-iphone-android.jpg' style='width:100%; border-radius:8px;'>",
        text: `
      <ul>
       <li><strong>Smartphone Life:</strong> By the mid-2010s, smartphones were no longer just phones — they were calendars, cameras, games, and social hubs. Screen time skyrocketed as mobile apps handled nearly everything. The iPhone and Android wars shaped tech culture.</li>

       <li><strong>Social Media Shifts:</strong> New apps like TikTok and Snapchat introduced short-form, visual-first communication. Instagram evolved with Stories and Reels, while Facebook declined in youth popularity. Viral content became central to how people connected.</li>

       <li><strong>Streaming Dominance:</strong> Netflix, YouTube, Hulu, and Disney+ changed how people consumed media. Binge-watching replaced waiting weekly for episodes. Original content became a major battleground for attention.</li>

       <li><strong>Privacy Gets Real:</strong> Whistleblowers like Edward Snowden revealed mass surveillance programs. Scandals like Cambridge Analytica exposed how personal data was being used. The conversation around digital privacy became urgent and ongoing.</li>

       <li><strong>Smart Homes & AI:</strong> Voice assistants like Alexa, Google Assistant, and Siri became part of everyday life. Smart lights, thermostats, and speakers brought automation to homes. These tools made tech feel more personal and responsive.</li>
       </ul>
       `     
      }
    ],
    sports: [
      {
        media: "<img src='athletes.jpg' style='width:100%; border-radius:8px;'>",
        text: `
      <ul>
       <li><strong>GOAT Debates:</strong> LeBron James, Serena Williams, Lionel Messi, and Cristiano Ronaldo dominated their sports. Fans debated stats, titles, and influence endlessly. These athletes weren’t just successful — they shaped the culture.</li>

       <li><strong>Olympic Icons:</strong> Usain Bolt broke records with a smile, Michael Phelps swam into history, and Simone Biles redefined gymnastics. Their athleticism inspired millions. The Olympics remained a global celebration of excellence.</li>

       <li><strong>Activism in Sports:</strong> Colin Kaepernick’s kneeling during the anthem sparked global conversations about race and protest. More athletes used their platforms for justice. The “shut up and dribble” mindset was challenged powerfully.</li>

       <li><strong>Women Dominate Headlines:</strong> The U.S. Women’s National Soccer Team won two World Cups and pushed for equal pay. Stars like Megan Rapinoe became household names. Women’s leagues and visibility saw major growth.</li>

       <li><strong>Rise of Esports:</strong> Competitive gaming exploded with tournaments, pro teams, and sponsorships. Games like League of Legends and Fortnite drew millions of viewers. Esports became a billion-dollar industry and a real path for young pros.</li>
       </ul>
       `
      }
    ]
  };
  
  
  const topicButtons = document.querySelectorAll("button[data-topic]");
  const mainContent = document.querySelector(".main-content");
  
  topicButtons.forEach(button => {
    button.addEventListener("click", () => {
      const topic = button.dataset.topic;
      updateContent(topic);
    });
  });