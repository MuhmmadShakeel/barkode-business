/**
 * Case-study catalogue — one entry per shared PDF case study.
 * Source PDFs live in /case-studies (project root). The structured content
 * below powers the /case-studies index + /case-studies/[slug] detail pages.
 *
 * Keep entries concise but real; the detail page renders each section
 * (overview, objectives, tools, process, results, learnings) when present.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  tags: string[];
  overview: string[];
  objectives: string[];
  tools: string[];
  process: string[];
  results: string[];
  learnings: string[];
  /** Optional headline metric shown on the card + hero. */
  metric?: { value: string; label: string };
};

export const CASE_STUDY_CATEGORIES = [
  "All",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Generative AI",
  "AI / LLM",
  "Mobile App",
  "Web & Data",
  "Systems & Games",
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "alexnet-cifar10-classification",
    title: "Image Classification using AlexNet on CIFAR-10",
    tagline: "A deep-learning CNN that classifies 60,000 images across 10 categories.",
    category: "Deep Learning",
    year: "2025",
    tags: ["Python", "PyTorch", "CNN", "CUDA", "Matplotlib", "scikit-learn"],
    metric: { value: "84.6%", label: "Test accuracy" },
    overview: [
      "This project implements a convolutional neural network based on the AlexNet architecture to classify images from the CIFAR-10 dataset of 60,000 colour images across 10 categories. The aim was a high-performance CNN that balances generalization and training efficiency.",
    ],
    objectives: [
      "Implement an AlexNet-style model using PyTorch.",
      "Achieve over 80% accuracy on the CIFAR-10 dataset.",
      "Apply data augmentation and regularization techniques.",
    ],
    tools: ["Python", "PyTorch", "Matplotlib & scikit-learn", "CUDA GPU", "CIFAR-10 dataset"],
    process: [
      "Input CIFAR-10 images → data augmentation (random crop, flip, colour jitter).",
      "AlexNet CNN: 3 convolutional blocks (ReLU, BatchNorm, MaxPooling) → fully-connected 1024 → 512 → 10.",
      "Training: CrossEntropyLoss, Adam (LR 0.001, weight decay 1e-4), StepLR scheduler, 50 epochs, batch size 128.",
      "Evaluation via accuracy and a confusion matrix.",
    ],
    results: [
      "Final training accuracy ~90%, test accuracy 84.62%.",
      "Overfitting reduced via augmentation and dropout.",
      "Confusion matrix showed balanced class-wise accuracy.",
    ],
    learnings: [
      "Data augmentation improves generalization significantly.",
      "Classic architectures like AlexNet still perform well.",
      "Visualization tools are vital for model diagnostics.",
    ],
  },
  {
    slug: "bovw-image-classification",
    title: "Bag of Visual Words for Image Classification",
    tagline: "Classifying cats, chairs and cameras with SIFT, KMeans, KNN & SVM.",
    category: "Computer Vision",
    year: "2025",
    tags: ["Python", "OpenCV", "SIFT", "KMeans", "KNN", "SVM"],
    metric: { value: "95%", label: "Best class accuracy (SVM)" },
    overview: [
      "A Bag of Visual Words (BoVW) pipeline for image classification using handcrafted SIFT descriptors, KMeans clustering, and KNN/SVM classifiers, classifying images of three object categories: cats, chairs, and cameras.",
    ],
    objectives: [
      "Build a robust feature-extraction pipeline using SIFT.",
      "Apply KMeans to create a visual vocabulary.",
      "Train KNN and SVM models to classify unseen test images.",
      "Visualize histogram representations and predictions.",
    ],
    tools: ["Python", "OpenCV", "SIFT", "KMeans", "KNN & SVM", "Matplotlib"],
    process: [
      "Load images and convert to grayscale; extract SIFT keypoints and descriptors into a feature pool.",
      "Cluster all descriptors with KMeans (k = 200) — each centre becomes a visual word.",
      "Encode each image as a histogram of visual words.",
      "Train KNN (k = 5) and a linear SVM on the histograms, then predict on unseen images.",
    ],
    results: [
      "SVM outperformed KNN — Cat 90%, Chair 82%, Camera 95%.",
      "Histogram encoding drastically reduced image complexity.",
      "Visualizations helped debug class confusion.",
    ],
    learnings: [
      "BoVW works effectively with SIFT and simple classifiers.",
      "Clustering + classical ML can build powerful vision systems.",
    ],
  },
  {
    slug: "glaucoma-detection-unet",
    title: "Glaucoma Detection in Retinal Fundus Images",
    tagline: "U-Net segmentation of optic cup & disc with automated CDR diagnosis.",
    category: "Computer Vision",
    year: "2025",
    tags: ["Python", "U-Net", "Segmentation", "Medical Imaging", "TensorFlow/Keras"],
    overview: [
      "Glaucoma is the second-largest cause of blindness worldwide and needs early diagnosis. This project segments the optic cup and optic disc from retinal fundus images using a U-Net model, then derives a Cup-to-Disc Ratio (CDR) to flag likelihood of glaucoma — a system that works without excessive equipment or specialist time.",
    ],
    objectives: [
      "Segment optic cup and optic disc from fundus images.",
      "Compute the Cup-to-Disc Ratio for diagnosis.",
      "Evaluate with accuracy, precision, recall and IoU.",
    ],
    tools: ["Python", "U-Net (encoder/decoder)", "OpenCV", "TensorFlow / Keras"],
    process: [
      "Preprocess: convert images to a uniform (256×256×1) grayscale format; build image, optic-cup and optic-disc lists by thresholding masks.",
      "Build a U-Net from conv/encoder/decoder blocks (conv layers + BatchNorm + ReLU, max-pool down, transpose-conv up with skip connections).",
      "Train on the dataset (batch size 2, 25–30 epochs).",
      "Predict masks, compute CDR; CDR > 0.4 → high likelihood of glaucoma.",
    ],
    results: [
      "High segmentation accuracy (optic disc & cup accuracy > 0.98).",
      "Automated CDR-based diagnosis with per-task precision/recall/IoU.",
    ],
    learnings: [
      "Consistent preprocessing (fixed input shape) is critical for U-Net.",
      "Skip connections preserve spatial detail for fine segmentation.",
    ],
  },
  {
    slug: "intel-image-classifier",
    title: "Intel Image Classifier",
    tagline: "GPU-accelerated transfer-learning pipeline with Optuna tuning and W&B logging.",
    category: "Deep Learning",
    year: "2025",
    tags: ["PyTorch Lightning", "ResNet18", "EfficientNet-B0", "Optuna", "Weights & Biases"],
    overview: [
      "A high-performance image-classification pipeline on Intel's scene dataset (6 terrain classes: buildings, forest, glacier, mountain, sea, street). It leverages PyTorch Lightning, transfer learning, and experiment tracking with Weights & Biases for scalable, reproducible training.",
    ],
    objectives: [
      "Classify scene images into 6 terrain classes via transfer learning.",
      "Optimize backbone architecture and learning rate with Optuna.",
      "Log and visualize training metrics; deploy a modular, scalable pipeline.",
    ],
    tools: ["PyTorch Lightning", "Optuna", "Weights & Biases", "ResNet18 / EfficientNet-B0"],
    process: [
      "Download the Intel dataset via Kaggle API; organize into train/test/predict.",
      "Build a Lightning DataModule to abstract loading.",
      "Automate model tuning with Optuna across trials; log to W&B.",
      "Select the best model, retrain, and evaluate on unseen data.",
    ],
    results: [
      "Best model: EfficientNet-B0 with ~92% test accuracy after Optuna tuning.",
      "Dashboards provided actionable visualizations of performance trends.",
    ],
    learnings: [
      "Optuna-tuned hyperparameters lifted accuracy in just a few trials.",
      "Good infrastructure (Lightning + W&B) makes training reproducible and simple.",
    ],
  },
  {
    slug: "voc-segmentation-unet",
    title: "VOC Segmentation App with Custom U-Net",
    tagline: "Pixel-level multi-class segmentation across all 21 Pascal VOC classes.",
    category: "Computer Vision",
    year: "2025",
    tags: ["PyTorch Lightning", "U-Net", "ConvTranspose2d", "Weights & Biases", "Pascal VOC 2012"],
    overview: [
      "A semantic-segmentation system that classifies every pixel in an image using a custom U-Net (ConvTranspose2d upsampling) on the Pascal VOC 2012 dataset, supporting all 21 classes — wrapped in a visual app for real-time exploration of predictions.",
    ],
    objectives: [
      "Build a U-Net-style segmentation model from scratch.",
      "Support all 21 VOC classes with pixel-wise accuracy.",
      "Normalize mask colours and log results live; ship a visual testing tool.",
    ],
    tools: ["PyTorch Lightning", "Custom U-Net (Conv2d / ConvTranspose2d)", "Weights & Biases", "Matplotlib"],
    process: [
      "Parse and convert RGB mask labels into integer masks; preprocess and normalize.",
      "Build encoder–bottleneck–decoder U-Net; train with validation + metric logging.",
      "Use ModelCheckpoint to save the top models by validation IoU.",
      "Display batches and side-by-side image/mask/prediction grids in the app.",
    ],
    results: [
      "Stable training and validation IoU with consistent foreground segmentation (people, dogs, bikes).",
      "A 3-panel app comparing input, mask, and prediction per epoch.",
    ],
    learnings: [
      "RGB-mask → class decoding and batch normalization stabilize training.",
      "Balancing performance with real-time logging is a core tradeoff.",
    ],
  },
  {
    slug: "satellite-image-matcher",
    title: "Satellite Image Matcher & Coordinate Projector",
    tagline: "Align aerial & reference satellite images and project pixels to real coordinates.",
    category: "Computer Vision",
    year: "2025",
    tags: ["Python", "OpenCV", "SIFT", "Homography", "RANSAC", "Tkinter"],
    overview: [
      "A desktop application that loads high-resolution aerial and reference satellite images, performs SIFT feature matching, computes a homography, and projects aerial pixel coordinates onto a geo-referenced map — a lightweight GIS-inspired tool for education and field applications.",
    ],
    objectives: [
      "Load aerial and reference satellite images and match features with SIFT.",
      "Compute a homography for alignment.",
      "Project aerial points to reference coordinates and convert to real lat/lon.",
    ],
    tools: ["Python", "OpenCV", "SIFT", "NumPy", "Pillow", "Tkinter"],
    process: [
      "Load a geo-referenced reference image (TIFF) and resized aerial images.",
      "Compute SIFT features; match keypoints with Lowe's ratio test.",
      "Estimate homography robustly with RANSAC.",
      "On click, project the point to the reference image and convert pixel → lat/lon.",
    ],
    results: [
      "Accurately overlays and aligns aerial and reference imagery.",
      "Projected points reflect accurate spatial correspondence.",
    ],
    learnings: [
      "Normalization, preprocessing, and good point selection drive matching quality.",
      "RANSAC is essential to reject outliers in homography estimation.",
    ],
  },
  {
    slug: "signature-recognition-cnn",
    title: "Signature Recognition using CNN",
    tagline: "Comparing CNN feature learning against classical HOG / SIFT for signatures.",
    category: "Computer Vision",
    year: "2025",
    tags: ["Python", "CNN", "HOG", "SIFT", "OpenCV"],
    overview: [
      "A signature-recognition study that processes signature images, extracts features, and classifies signatures by individual ID. It benchmarks CNN-based feature extraction against traditional techniques (HOG and SIFT), with a full segmentation and train/test pipeline.",
    ],
    objectives: [
      "Segment and preprocess signature samples (normalize, denoise, isolate).",
      "Classify signatures by signer identity.",
      "Compare CNN feature extraction with HOG and SIFT.",
    ],
    tools: ["Python", "CNN", "HOG", "SIFT", "OpenCV"],
    process: [
      "Collect a labelled signature dataset (16 images × 12 rows × 4 signatures).",
      "Preprocess: normalize, reduce noise, segment signatures from background.",
      "Train a CNN (conv + pooling + dense) and evaluate with accuracy, precision, recall and F-measure.",
      "Generate confusion matrices for HOG and CNN.",
    ],
    results: [
      "On this small dataset, HOG features gave the strongest scores; CNN highlighted the need for more data.",
      "Regularization mitigated early overfitting.",
    ],
    learnings: [
      "Signature-style variability demands robust preprocessing.",
      "Classical descriptors remain strong baselines on tiny datasets.",
    ],
  },
  {
    slug: "vae-gan-signature-generation",
    title: "VAE & Simple GAN for Signature Generation",
    tagline: "Generating realistic synthetic signatures with a VAE and a GAN.",
    category: "Generative AI",
    year: "2024",
    tags: ["PyTorch", "VAE", "GAN", "Data Augmentation"],
    overview: [
      "An implementation of a Variational Autoencoder (VAE) and a Generative Adversarial Network (GAN) to generate realistic fake signatures. The VAE learns latent representations by encoding and reconstructing signatures; the GAN's generator creates new signatures from noise while a discriminator judges realism.",
    ],
    objectives: [
      "Learn meaningful latent representations of signatures with a VAE.",
      "Generate convincing synthetic signatures with a GAN.",
      "Improve robustness on a limited dataset via augmentation.",
    ],
    tools: ["PyTorch", "VAE (encoder/decoder)", "GAN (generator/discriminator)"],
    process: [
      "Augment the dataset (rotation, horizontal flip, Gaussian noise) for diversity.",
      "Train the VAE with combined reconstruction + KL-divergence loss.",
      "Train the GAN with binary cross-entropy adversarial loss.",
      "Evaluate via reconstruction loss and qualitative comparison to real signatures.",
    ],
    results: [
      "VAE achieved low reconstruction loss; GAN produced high-quality, realistic signatures.",
      "Generated samples retained distinctive features of the originals.",
    ],
    learnings: [
      "VAE structural understanding + GAN realism are complementary.",
      "Augmentation meaningfully enriches small training sets.",
    ],
  },
  {
    slug: "sketch-to-photo-gan",
    title: "Sketch-to-Photo Generation using GANs",
    tagline: "Converting face sketches into realistic photos with a pix2pix-style GAN.",
    category: "Generative AI",
    year: "2025",
    tags: ["PyTorch", "GAN", "Encoder-Decoder", "L1 + Adversarial Loss"],
    overview: [
      "A deep-learning pipeline that transforms human face sketches into full-colour, photo-realistic images using a Generative Adversarial Network. The generator maps sketches to RGB photos while the discriminator refines realism, trained on paired sketch-photo datasets in PyTorch.",
    ],
    objectives: [
      "Train a GAN to reconstruct photo images from sketch input.",
      "Use L1 loss + adversarial feedback for better image fidelity.",
      "Generalize across validation images with normalized training data.",
    ],
    tools: ["PyTorch", "Torchvision", "Matplotlib", "PIL", "CUDA"],
    process: [
      "Pair grayscale sketches with their RGB photos via a custom dataset loader.",
      "Generator: encoder–decoder CNN (3 conv + 3 deconv, BatchNorm, ReLU, Tanh).",
      "Discriminator: CNN with LeakyReLU on the 4-channel sketch+photo input.",
      "Train with BCE adversarial loss + L1 pixel loss (Adam), 100 epochs.",
    ],
    results: [
      "Generated realistic faces capturing structure, contours and lighting.",
      "Side-by-side per-epoch visualization tracked convergence.",
    ],
    learnings: [
      "Combining pixel-based and adversarial objectives sharpens output.",
      "Conditioned GAN training and data normalization are key to fidelity.",
    ],
  },
  {
    slug: "hallucination-detection-logistic-regression",
    title: "Hallucination Detection with Logistic Regression",
    tagline: "A lightweight, from-scratch classifier flagging factual vs hallucinated summaries.",
    category: "NLP",
    year: "2025",
    tags: ["Python", "NumPy", "Bag of Words", "Logistic Regression", "scikit-learn"],
    overview: [
      "A factuality classifier that labels generated text summaries as factual or hallucinated, using a custom logistic-regression model built from scratch with NumPy and Bag-of-Words features. It shows that simple, interpretable models can compete on factuality detection.",
    ],
    objectives: [
      "Detect hallucinated summaries with binary classification.",
      "Build logistic regression without external ML libraries.",
      "Extract features with Bag of Words and analyze errors.",
    ],
    tools: ["Python", "pandas", "NumPy", "scikit-learn (evaluation only)"],
    process: [
      "Load the XSum Hallucination dataset (summary + is_factual).",
      "Clean and tokenize text; build a BoW vocabulary and feature vectors.",
      "Implement logistic regression (sigmoid + gradient descent, cross-entropy loss).",
      "Evaluate with accuracy/precision/recall/F1 and k-fold cross-validation.",
    ],
    results: [
      "Strong, consistent scores across folds despite model simplicity.",
      "Error analysis surfaced hallucination cues: vague terms, wrong entities, abstractions.",
    ],
    learnings: [
      "Simple models yield meaningful NLP insights; BoW is a strong baseline.",
      "Building from scratch deepens understanding of optimization.",
    ],
  },
  {
    slug: "word-completion-lstm",
    title: "Word Completion using LSTM",
    tagline: "Real-time next-word suggestions from an LSTM trained on Shakespeare.",
    category: "NLP",
    year: "2024",
    tags: ["Python", "TensorFlow", "LSTM", "RNN"],
    metric: { value: "90%", label: "Model accuracy" },
    overview: [
      "A word-level LSTM model for sentence completion, trained on Shakespeare's plays (111,396 lines; 11,000 used for training). A real-time interface suggests words as the user types, achieving ~90% accuracy with strong coherence and fluency.",
    ],
    objectives: [
      "Predict the next word in a sequence from prior context.",
      "Build a responsive interface for live word suggestions.",
      "Tune hyperparameters for coherence, fluency and accuracy.",
    ],
    tools: ["Python", "TensorFlow / Keras", "LSTM"],
    process: [
      "Clean and lowercase text; tokenize; build word sequences.",
      "Model: input layer → LSTM layer(s) → dense softmax over vocabulary.",
      "Train with the forget/input/output gate mechanics of LSTM.",
      "Serve predictions via a UI that takes a seed sentence + word count.",
    ],
    results: [
      "~90% training accuracy with closely-matched validation accuracy.",
      "Coherent, fluent generations; clear improvement over a vanilla RNN.",
    ],
    learnings: [
      "LSTM gating beats plain RNNs on long-term dependencies.",
      "Balancing complexity prevents overfitting while keeping accuracy high.",
    ],
  },
  {
    slug: "pdf-chatbot-llama2-rag",
    title: "PDF Chatbot with LLaMA-2 & RAG",
    tagline: "An AI assistant that answers questions grounded in your PDF content.",
    category: "AI / LLM",
    year: "2025",
    tags: ["LLaMA-2", "RAG", "LangChain", "ChromaDB", "Semantic Search"],
    overview: [
      "An intelligent chatbot that answers user questions about an uploaded PDF using semantic search and language understanding. It applies a Retrieval-Augmented Generation (RAG) pipeline — retrieving relevant document chunks and providing them to LLaMA-2 — so answers stay grounded in the original content.",
    ],
    objectives: [
      "Build a domain-agnostic chatbot for querying PDFs.",
      "Use RAG to ground responses and minimize hallucination.",
      "Provide relevant context and accurate, grounded answers.",
    ],
    tools: ["LLaMA-2 (7B)", "LangChain", "ChromaDB", "Hugging Face", "Sentence-Transformer embeddings"],
    process: [
      "Parse and chunk the uploaded PDF; embed chunks and store in ChromaDB.",
      "On a question, embed the query and retrieve the most relevant chunks (semantic search).",
      "Feed retrieved context + question to LLaMA-2 to generate a grounded answer.",
      "Wrap in an upload → ask → history UI with secure accounts.",
    ],
    results: [
      "Accurate, context-grounded answers drawn directly from the source PDF.",
      "Clean account, upload, chat and history interface.",
    ],
    learnings: [
      "Chunking strategy and embeddings drive retrieval quality.",
      "Prompt templates and grounded context are key to reducing hallucination.",
    ],
  },
  {
    slug: "botnist-support-chatbot",
    title: "Bot-Nist — Web Data into Intelligent Support",
    tagline: "Subscription chatbot that turns scraped site content into customer support.",
    category: "AI / LLM",
    year: "2025",
    tags: ["MERN", "Node.js", "Selenium", "Python", "RAG", "NLP", "ChromaDB"],
    overview: [
      "Bot-Nist transforms a website's own data into an intelligent support chatbot for its owners. It scrapes user-submitted domains, classifies the content with NLP, and uses a RAG framework to generate a customer-support bot — offered to website owners on a subscription model with analytics.",
    ],
    objectives: [
      "Chatbot integration for website owners.",
      "Subscription-based access to the AI chatbot.",
      "User account & subscription management with performance analytics.",
    ],
    tools: ["MERN", "Node.js & Express", "Selenium / deep-crawl", "Python (LLM)", "ChromaDB"],
    process: [
      "Scrape data from user-submitted (domain-specified) URLs via web crawling.",
      "Classify scraped content with NLP techniques.",
      "Generate a customer-support bot with an LLM (RAG framework).",
      "Design and develop a scalable API with UI and query handling.",
    ],
    results: [
      "Per-website support bots built from each owner's own content.",
      "Subscription, account management and analytics dashboards.",
    ],
    learnings: [
      "Reliable crawling + content classification underpins answer quality.",
      "RAG keeps responses anchored to a site's real information.",
    ],
  },
  {
    slug: "webweave-semantic-crawler",
    title: "WebWeave — Semantic Site Crawler & Data Extractor",
    tagline: "Parses any website into structured, classified, RAG-ready data.",
    category: "Web & Data",
    year: "2025",
    tags: ["Python", "BeautifulSoup", "Selenium", "MongoDB", "Regex", "SHA-256"],
    overview: [
      "A web application that crawls arbitrary websites and extracts structured information — contact info, company overview, services, legal sections — using keyword-driven logic. The cleaned, deduplicated, formatted output is stored in MongoDB for later retrieval or chatbot integration.",
    ],
    objectives: [
      "Extract meaningful content from arbitrary websites.",
      "Tag and classify data by category (overview, services, team, legal, contact).",
      "Persist results to MongoDB with an SHA-256 key to identify crawls uniquely.",
    ],
    tools: ["Python", "BeautifulSoup", "Selenium", "MongoDB", "Regex"],
    process: [
      "User submits a URL; crawler loads the root page and discovers internal links.",
      "Categorize content with predefined keyword buckets; deduplicate to avoid repetition.",
      "Save outputs as a file-saving pipeline and upload final data with a hash key.",
      "Return an easily-consumable JSON response to the frontend.",
    ],
    results: [
      "Successfully extracted structured content from real-world domains.",
      "High keyword-categorization coverage with clean, deduplicated JSON output.",
    ],
    learnings: [
      "Robust crawling must handle inconsistent structure and noise.",
      "Memory control on large pages + dedup keep the pipeline efficient.",
    ],
  },
  {
    slug: "blockchain-remote-code-execution",
    title: "Decentralized Blockchain for Remote Code Execution",
    tagline: "IPFS + Proof-of-Work for secure, reliable distributed task execution.",
    category: "Web & Data",
    year: "2024",
    tags: ["Blockchain", "IPFS", "Proof of Work", "Distributed Systems"],
    overview: [
      "A decentralized blockchain that supports remote code execution. It uses IPFS and Proof of Work to execute code by storing hash references to code and data files, aiming to ensure secure, reliable task execution across distributed networks.",
    ],
    objectives: [
      "Enable secure remote execution of code in a distributed network.",
      "Use IPFS for distributed storage of code and data.",
      "Anchor execution in a tamper-proof blockchain.",
    ],
    tools: ["IPFS", "Blockchain", "Proof of Work"],
    process: [
      "Client sends hashes of code and data stored on IPFS.",
      "Nodes download code/data from IPFS based on the received hashes.",
      "Execute the code and create transactions.",
      "Store transactions in the blockchain using Proof of Work.",
    ],
    results: [
      "IPFS provided an effective distributed-storage solution.",
      "Blockchain integration ensured tamper-proof execution records.",
    ],
    learnings: [
      "Understood the real challenges of decentralized system design.",
      "Hash-referenced storage keeps on-chain data light.",
    ],
  },
  {
    slug: "brickbreaker-x86-assembly",
    title: "BrickBreaker — Retro Arcade in x86 Assembly",
    tagline: "A full game engine hand-coded in x86 Assembly with direct VGA rendering.",
    category: "Systems & Games",
    year: "2024",
    tags: ["x86 Assembly", "MASM", "DOSBox", "VGA", "Keyboard ISR"],
    overview: [
      "A classic brick-breaking arcade game, reinvented and built from scratch in x86 Assembly with a modern, minimalist approach. It demonstrates system-level mastery through direct VGA mode access, custom keyboard interrupt handling, and low-level memory optimization.",
    ],
    objectives: [
      "Demonstrate system-level mastery by hand-coding a full game engine in Assembly.",
      "Match the frame-rate and precision of commercial retro games.",
    ],
    tools: ["MASM assembler", "DOSBox", "Custom SVG assets"],
    process: [
      "Direct VGA mode access for rendering; keyboard ISR for input.",
      "Stepwise build: bootstrapping, draw loop, input handling, rendering.",
      "Bitwise collision detection and frame-perfect movement.",
    ],
    results: [
      "A smooth-playing, nostalgic arcade experience in pure Assembly.",
      "Hyper-responsive input via custom keyboard interrupt handling.",
    ],
    learnings: [
      "Insight into how graphics, input, and physics interact at the machine level.",
      "Validated incremental, low-level programming methodologies.",
    ],
  },
  {
    slug: "rushhour-cpp-game",
    title: "RushHour — Dynamic Passenger Pickup Game in C++",
    tagline: "A real-time arcade driving game with escalating difficulty.",
    category: "Systems & Games",
    year: "2024",
    tags: ["C++", "SFML / SDL", "OOP", "Data Structures"],
    overview: [
      "A fast-paced, real-time 2D arcade game in C++ where players drive a car to pick up and drop off randomly spawned passengers while avoiding traffic. Each successful drop-off intensifies the challenge with more traffic and obstacles.",
    ],
    objectives: [
      "Build a real-time arcade game with random events and difficulty scaling.",
      "Encourage player skill development through a timed scoring system.",
    ],
    tools: ["C++", "SFML / SDL", "Queues & arrays", "Timers"],
    process: [
      "Grid-based map design with roads, spawn zones and static obstacles.",
      "Arrow-key vehicle control with collision detection.",
      "Passenger queue system for pickup/drop-off with score tracking.",
      "Difficulty scaling: each drop-off adds cars and speed; Top-10 leaderboard in a file.",
    ],
    results: [
      "Smooth collision logic and frame-rate stability under heavy game state.",
      "Persistent leaderboard maintained across sessions.",
    ],
    learnings: [
      "Efficient memory usage and object pooling matter for real-time games.",
      "Applied classical OOP principles to game development logic.",
    ],
  },
  {
    slug: "mentorme-hiring-app",
    title: "MentorMe — Hiring On-The-Go App",
    tagline: "A smart mobile platform connecting mentors and talent in real time.",
    category: "Mobile App",
    year: "2025",
    tags: ["Mobile", "Real-time Chat", "Scheduling", "Booking"],
    overview: [
      "MentorMe is a mobile-first platform that connects mentors and talent in real time — letting users discover mentors, view profiles and ratings, schedule sessions, chat live, and book and manage mentorship on the go.",
    ],
    objectives: [
      "Connect mentors and mentees with real-time discovery and booking.",
      "Provide profiles, ratings, scheduling, chat and analytics.",
    ],
    tools: ["Mobile app framework", "Real-time chat", "Scheduling & booking", "Profile management"],
    process: [
      "Map the mentor/mentee journey: discover → profile → schedule → chat → book.",
      "Build calendar-based session booking with time-slot selection.",
      "Add live chat, upcoming sessions, ratings and a personalized feed.",
    ],
    results: [
      "Seamless real-time scheduling and mentor discovery experience.",
      "Clean dashboards for sessions, ratings and profile management.",
    ],
    learnings: [
      "Real-time UX (chat + availability) is central to a hiring platform.",
      "Clear information hierarchy keeps mobile flows fast and intuitive.",
    ],
  },
  {
    slug: "workwise-freelancing-app",
    title: "WorkWise — Freelancing Application (Kotlin)",
    tagline: "A mobile-first freelancing platform connecting clients and skilled professionals.",
    category: "Mobile App",
    year: "2025",
    tags: ["Kotlin", "Android", "Marketplace", "Real-time Messaging"],
    overview: [
      "WorkWise is a mobile-first freelancing platform built in Kotlin, connecting clients with skilled professionals — inspired by platforms like Fiverr and Upwork. It supports gig discovery, posting, messaging, and hiring directly from the phone.",
    ],
    objectives: [
      "Connect clients and freelancers in a mobile marketplace.",
      "Support gig discovery, posting, chat and hiring workflows.",
    ],
    tools: ["Kotlin", "Android", "Real-time messaging"],
    process: [
      "Home + featured/popular gigs discovery with categories and search.",
      "Gig detail, requirements, budget/timeline and apply flow.",
      "In-app messaging and recommended-for-you feeds.",
      "Freelancer profiles with skills, ratings, reviews and portfolio.",
    ],
    results: [
      "Smooth gig browsing, posting and client–freelancer messaging.",
      "Profile, ratings and portfolio surfaces that build trust.",
    ],
    learnings: [
      "Marketplace UX hinges on fast discovery and clear trust signals.",
      "Native Kotlin patterns keep the experience responsive.",
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((c) => c.slug === slug);

/**
 * Per-case-study media. We attach ONLY the genuine charts/graphs extracted
 * from the source PDF (no surrounding text — that's written above), plus a
 * link to the full PDF so visitors can read/download the original.
 * The text-heavy infographic designs are intentionally NOT shown as images
 * (they'd duplicate the written sections); their PDF is linked instead.
 */
export type CaseStudyMedia = {
  /** Card thumbnail. `design` = full infographic (show top); `figure` = a chart. */
  cover?: string;
  coverType?: "design" | "figure";
  /** Charts/graphs only (no surrounding report text) — shown on the detail page. */
  figures?: { src: string; alt: string }[];
  /** Public path to the full case-study PDF (view + download). */
  pdf?: string;
};

const M = (slug: string) => `/images/case-studies/${slug}`;
const PDF = (slug: string) => `/case-studies/${slug}.pdf`;
const COVER = (slug: string) => `${M(slug)}/cover.webp`;
const fig = (slug: string, n: number, alt: string) => ({ src: `${M(slug)}/fig-${n}.webp`, alt });
const figs = (slug: string, n: number, alt: string) =>
  Array.from({ length: n }, (_, i) => ({
    src: `${M(slug)}/fig-${i + 1}.webp`,
    alt: n > 1 ? `${alt} (${i + 1})` : alt,
  }));

export const CASE_STUDY_MEDIA: Record<string, CaseStudyMedia> = {
  // ── Reports — card cover = the first chart; detail page shows all charts + PDF ──
  "alexnet-cifar10-classification": {
    cover: `${M("alexnet-cifar10-classification")}/fig-1.webp`,
    coverType: "figure",
    pdf: PDF("alexnet-cifar10-classification"),
    figures: figs("alexnet-cifar10-classification", 1, "Confusion matrix — CIFAR-10 classification with AlexNet"),
  },
  "bovw-image-classification": {
    cover: `${M("bovw-image-classification")}/fig-1.webp`,
    coverType: "figure",
    pdf: PDF("bovw-image-classification"),
    figures: figs("bovw-image-classification", 2, "Bag-of-Visual-Words classification result"),
  },
  "glaucoma-detection-unet": {
    cover: `${M("glaucoma-detection-unet")}/fig-1.webp`,
    coverType: "figure",
    pdf: PDF("glaucoma-detection-unet"),
    figures: [
      fig("glaucoma-detection-unet", 1, "U-Net architecture for optic cup & disc segmentation"),
      fig("glaucoma-detection-unet", 2, "Predicted vs original cup/disc masks"),
      fig("glaucoma-detection-unet", 3, "Segmentation metrics with predicted masks"),
      fig("glaucoma-detection-unet", 4, "Predicted vs original masks (sample 2)"),
      fig("glaucoma-detection-unet", 5, "Predicted vs original masks (sample 3)"),
      fig("glaucoma-detection-unet", 6, "Predicted vs original masks (sample 4)"),
    ],
  },
  "signature-recognition-cnn": {
    cover: `${M("signature-recognition-cnn")}/fig-1.webp`,
    coverType: "figure",
    pdf: PDF("signature-recognition-cnn"),
    figures: figs("signature-recognition-cnn", 2, "Confusion matrix — signature recognition"),
  },
  "vae-gan-signature-generation": {
    cover: `${M("vae-gan-signature-generation")}/fig-1.webp`,
    coverType: "figure",
    pdf: PDF("vae-gan-signature-generation"),
    figures: figs("vae-gan-signature-generation", 5, "Generated signature samples"),
  },
  "word-completion-lstm": {
    cover: `${M("word-completion-lstm")}/fig-1.webp`,
    coverType: "figure",
    pdf: PDF("word-completion-lstm"),
    figures: figs("word-completion-lstm", 3, "Word completion interface"),
  },
  "hallucination-detection-logistic-regression": {
    pdf: PDF("hallucination-detection-logistic-regression"),
  },
  // ── Product / infographic case studies — card cover = the full design ──
  "intel-image-classifier": { cover: COVER("intel-image-classifier"), coverType: "design", pdf: PDF("intel-image-classifier") },
  "voc-segmentation-unet": { cover: COVER("voc-segmentation-unet"), coverType: "design", pdf: PDF("voc-segmentation-unet") },
  "satellite-image-matcher": { cover: COVER("satellite-image-matcher"), coverType: "design", pdf: PDF("satellite-image-matcher") },
  "sketch-to-photo-gan": { cover: COVER("sketch-to-photo-gan"), coverType: "design", pdf: PDF("sketch-to-photo-gan") },
  "pdf-chatbot-llama2-rag": { cover: COVER("pdf-chatbot-llama2-rag"), coverType: "design", pdf: PDF("pdf-chatbot-llama2-rag") },
  "botnist-support-chatbot": { cover: COVER("botnist-support-chatbot"), coverType: "design", pdf: PDF("botnist-support-chatbot") },
  "webweave-semantic-crawler": { cover: COVER("webweave-semantic-crawler"), coverType: "design", pdf: PDF("webweave-semantic-crawler") },
  "blockchain-remote-code-execution": { cover: COVER("blockchain-remote-code-execution"), coverType: "design", pdf: PDF("blockchain-remote-code-execution") },
  "brickbreaker-x86-assembly": { cover: COVER("brickbreaker-x86-assembly"), coverType: "design", pdf: PDF("brickbreaker-x86-assembly") },
  "rushhour-cpp-game": { cover: COVER("rushhour-cpp-game"), coverType: "design", pdf: PDF("rushhour-cpp-game") },
  "mentorme-hiring-app": { cover: COVER("mentorme-hiring-app"), coverType: "design", pdf: PDF("mentorme-hiring-app") },
  "workwise-freelancing-app": { cover: COVER("workwise-freelancing-app"), coverType: "design", pdf: PDF("workwise-freelancing-app") },
};

export const getCaseStudyMedia = (slug: string): CaseStudyMedia =>
  CASE_STUDY_MEDIA[slug] ?? {};

/** Research/report case studies that should render LAST on the listing. */
export const RESEARCH_CASE_STUDIES = new Set([
  "alexnet-cifar10-classification",
  "bovw-image-classification",
  "glaucoma-detection-unet",
  "signature-recognition-cnn",
  "vae-gan-signature-generation",
  "hallucination-detection-logistic-regression",
  "word-completion-lstm",
]);

/** Display order: product/infographic case studies first, research last. */
export const ORDERED_CASE_STUDIES: CaseStudy[] = [
  ...CASE_STUDIES.filter((c) => !RESEARCH_CASE_STUDIES.has(c.slug)),
  ...CASE_STUDIES.filter((c) => RESEARCH_CASE_STUDIES.has(c.slug)),
];
