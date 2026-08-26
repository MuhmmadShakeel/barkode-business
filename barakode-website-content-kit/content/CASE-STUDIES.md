# Case Studies

Structured data: [`case-studies.json`](case-studies.json) · Images: `../images/case-studies/<slug>/` · PDFs: `../assets-pdfs/<slug>.pdf`

Section eyebrow: **OUR WORK** · Heading: *"Selected work / in motion"*

**19 case studies.** Filter categories: All · Deep Learning · Computer Vision · NLP · Generative AI · AI / LLM · Mobile App · Web & Data · Systems & Games

Display order: product/infographic studies first, research reports last.

These are engineering and research projects, not client engagements — no client is named in any of them.

| # | Title | Category | Year | Metric | Cover | Figures | PDF |
|--:|---|---|--:|---|---|--:|---|
| 1 | **Intel Image Classifier** | Deep Learning | 2025 | — | design | 0 | ✓ |
| 2 | **VOC Segmentation App with Custom U-Net** | Computer Vision | 2025 | — | design | 0 | ✓ |
| 3 | **Satellite Image Matcher & Coordinate Projector** | Computer Vision | 2025 | — | design | 0 | ✓ |
| 4 | **Sketch-to-Photo Generation using GANs** | Generative AI | 2025 | — | design | 0 | ✓ |
| 5 | **PDF Chatbot with LLaMA-2 & RAG** | AI / LLM | 2025 | — | design | 0 | ✓ |
| 6 | **Bot-Nist — Web Data into Intelligent Support** | AI / LLM | 2025 | — | design | 0 | ✓ |
| 7 | **WebWeave — Semantic Site Crawler & Data Extractor** | Web & Data | 2025 | — | design | 0 | ✓ |
| 8 | **Decentralized Blockchain for Remote Code Execution** | Web & Data | 2024 | — | design | 0 | ✓ |
| 9 | **BrickBreaker — Retro Arcade in x86 Assembly** | Systems & Games | 2024 | — | design | 0 | ✓ |
| 10 | **RushHour — Dynamic Passenger Pickup Game in C++** | Systems & Games | 2024 | — | design | 0 | ✓ |
| 11 | **MentorMe — Hiring On-The-Go App** | Mobile App | 2025 | — | design | 0 | ✓ |
| 12 | **WorkWise — Freelancing Application (Kotlin)** | Mobile App | 2025 | — | design | 0 | ✓ |
| 13 | **Image Classification using AlexNet on CIFAR-10** | Deep Learning | 2025 | 84.6% Test accuracy | figure | 1 | ✓ |
| 14 | **Bag of Visual Words for Image Classification** | Computer Vision | 2025 | 95% Best class accuracy (SVM) | figure | 2 | ✓ |
| 15 | **Glaucoma Detection in Retinal Fundus Images** | Computer Vision | 2025 | — | figure | 6 | ✓ |
| 16 | **Signature Recognition using CNN** | Computer Vision | 2025 | — | figure | 2 | ✓ |
| 17 | **VAE & Simple GAN for Signature Generation** | Generative AI | 2024 | — | figure | 5 | ✓ |
| 18 | **Hallucination Detection with Logistic Regression** | NLP | 2025 | — | — | 0 | ✓ |
| 19 | **Word Completion using LSTM** | NLP | 2024 | 90% Model accuracy | figure | 3 | ✓ |

---

## Intel Image Classifier

`/case-studies/intel-image-classifier` · Deep Learning · 2025

*GPU-accelerated transfer-learning pipeline with Optuna tuning and W&B logging.*

**Tags** — PyTorch Lightning · ResNet18 · EfficientNet-B0 · Optuna · Weights & Biases

### Overview

A high-performance image-classification pipeline on Intel's scene dataset (6 terrain classes: buildings, forest, glacier, mountain, sea, street). It leverages PyTorch Lightning, transfer learning, and experiment tracking with Weights & Biases for scalable, reproducible training.

### Objectives

- Classify scene images into 6 terrain classes via transfer learning.
- Optimize backbone architecture and learning rate with Optuna.
- Log and visualize training metrics; deploy a modular, scalable pipeline.

### Tools

PyTorch Lightning · Optuna · Weights & Biases · ResNet18 / EfficientNet-B0

### Process

1. Download the Intel dataset via Kaggle API; organize into train/test/predict.
2. Build a Lightning DataModule to abstract loading.
3. Automate model tuning with Optuna across trials; log to W&B.
4. Select the best model, retrain, and evaluate on unseen data.

### Results

- Best model: EfficientNet-B0 with ~92% test accuracy after Optuna tuning.
- Dashboards provided actionable visualizations of performance trends.

### Learnings

- Optuna-tuned hyperparameters lifted accuracy in just a few trials.
- Good infrastructure (Lightning + W&B) makes training reproducible and simple.

### Media

- Cover (design) — `images/case-studies/intel-image-classifier/cover.webp`
- Full report — `assets-pdfs/intel-image-classifier.pdf`

---

## VOC Segmentation App with Custom U-Net

`/case-studies/voc-segmentation-unet` · Computer Vision · 2025

*Pixel-level multi-class segmentation across all 21 Pascal VOC classes.*

**Tags** — PyTorch Lightning · U-Net · ConvTranspose2d · Weights & Biases · Pascal VOC 2012

### Overview

A semantic-segmentation system that classifies every pixel in an image using a custom U-Net (ConvTranspose2d upsampling) on the Pascal VOC 2012 dataset, supporting all 21 classes — wrapped in a visual app for real-time exploration of predictions.

### Objectives

- Build a U-Net-style segmentation model from scratch.
- Support all 21 VOC classes with pixel-wise accuracy.
- Normalize mask colours and log results live; ship a visual testing tool.

### Tools

PyTorch Lightning · Custom U-Net (Conv2d / ConvTranspose2d) · Weights & Biases · Matplotlib

### Process

1. Parse and convert RGB mask labels into integer masks; preprocess and normalize.
2. Build encoder–bottleneck–decoder U-Net; train with validation + metric logging.
3. Use ModelCheckpoint to save the top models by validation IoU.
4. Display batches and side-by-side image/mask/prediction grids in the app.

### Results

- Stable training and validation IoU with consistent foreground segmentation (people, dogs, bikes).
- A 3-panel app comparing input, mask, and prediction per epoch.

### Learnings

- RGB-mask → class decoding and batch normalization stabilize training.
- Balancing performance with real-time logging is a core tradeoff.

### Media

- Cover (design) — `images/case-studies/voc-segmentation-unet/cover.webp`
- Full report — `assets-pdfs/voc-segmentation-unet.pdf`

---

## Satellite Image Matcher & Coordinate Projector

`/case-studies/satellite-image-matcher` · Computer Vision · 2025

*Align aerial & reference satellite images and project pixels to real coordinates.*

**Tags** — Python · OpenCV · SIFT · Homography · RANSAC · Tkinter

### Overview

A desktop application that loads high-resolution aerial and reference satellite images, performs SIFT feature matching, computes a homography, and projects aerial pixel coordinates onto a geo-referenced map — a lightweight GIS-inspired tool for education and field applications.

### Objectives

- Load aerial and reference satellite images and match features with SIFT.
- Compute a homography for alignment.
- Project aerial points to reference coordinates and convert to real lat/lon.

### Tools

Python · OpenCV · SIFT · NumPy · Pillow · Tkinter

### Process

1. Load a geo-referenced reference image (TIFF) and resized aerial images.
2. Compute SIFT features; match keypoints with Lowe's ratio test.
3. Estimate homography robustly with RANSAC.
4. On click, project the point to the reference image and convert pixel → lat/lon.

### Results

- Accurately overlays and aligns aerial and reference imagery.
- Projected points reflect accurate spatial correspondence.

### Learnings

- Normalization, preprocessing, and good point selection drive matching quality.
- RANSAC is essential to reject outliers in homography estimation.

### Media

- Cover (design) — `images/case-studies/satellite-image-matcher/cover.webp`
- Full report — `assets-pdfs/satellite-image-matcher.pdf`

---

## Sketch-to-Photo Generation using GANs

`/case-studies/sketch-to-photo-gan` · Generative AI · 2025

*Converting face sketches into realistic photos with a pix2pix-style GAN.*

**Tags** — PyTorch · GAN · Encoder-Decoder · L1 + Adversarial Loss

### Overview

A deep-learning pipeline that transforms human face sketches into full-colour, photo-realistic images using a Generative Adversarial Network. The generator maps sketches to RGB photos while the discriminator refines realism, trained on paired sketch-photo datasets in PyTorch.

### Objectives

- Train a GAN to reconstruct photo images from sketch input.
- Use L1 loss + adversarial feedback for better image fidelity.
- Generalize across validation images with normalized training data.

### Tools

PyTorch · Torchvision · Matplotlib · PIL · CUDA

### Process

1. Pair grayscale sketches with their RGB photos via a custom dataset loader.
2. Generator: encoder–decoder CNN (3 conv + 3 deconv, BatchNorm, ReLU, Tanh).
3. Discriminator: CNN with LeakyReLU on the 4-channel sketch+photo input.
4. Train with BCE adversarial loss + L1 pixel loss (Adam), 100 epochs.

### Results

- Generated realistic faces capturing structure, contours and lighting.
- Side-by-side per-epoch visualization tracked convergence.

### Learnings

- Combining pixel-based and adversarial objectives sharpens output.
- Conditioned GAN training and data normalization are key to fidelity.

### Media

- Cover (design) — `images/case-studies/sketch-to-photo-gan/cover.webp`
- Full report — `assets-pdfs/sketch-to-photo-gan.pdf`

---

## PDF Chatbot with LLaMA-2 & RAG

`/case-studies/pdf-chatbot-llama2-rag` · AI / LLM · 2025

*An AI assistant that answers questions grounded in your PDF content.*

**Tags** — LLaMA-2 · RAG · LangChain · ChromaDB · Semantic Search

### Overview

An intelligent chatbot that answers user questions about an uploaded PDF using semantic search and language understanding. It applies a Retrieval-Augmented Generation (RAG) pipeline — retrieving relevant document chunks and providing them to LLaMA-2 — so answers stay grounded in the original content.

### Objectives

- Build a domain-agnostic chatbot for querying PDFs.
- Use RAG to ground responses and minimize hallucination.
- Provide relevant context and accurate, grounded answers.

### Tools

LLaMA-2 (7B) · LangChain · ChromaDB · Hugging Face · Sentence-Transformer embeddings

### Process

1. Parse and chunk the uploaded PDF; embed chunks and store in ChromaDB.
2. On a question, embed the query and retrieve the most relevant chunks (semantic search).
3. Feed retrieved context + question to LLaMA-2 to generate a grounded answer.
4. Wrap in an upload → ask → history UI with secure accounts.

### Results

- Accurate, context-grounded answers drawn directly from the source PDF.
- Clean account, upload, chat and history interface.

### Learnings

- Chunking strategy and embeddings drive retrieval quality.
- Prompt templates and grounded context are key to reducing hallucination.

### Media

- Cover (design) — `images/case-studies/pdf-chatbot-llama2-rag/cover.webp`
- Full report — `assets-pdfs/pdf-chatbot-llama2-rag.pdf`

---

## Bot-Nist — Web Data into Intelligent Support

`/case-studies/botnist-support-chatbot` · AI / LLM · 2025

*Subscription chatbot that turns scraped site content into customer support.*

**Tags** — MERN · Node.js · Selenium · Python · RAG · NLP · ChromaDB

### Overview

Bot-Nist transforms a website's own data into an intelligent support chatbot for its owners. It scrapes user-submitted domains, classifies the content with NLP, and uses a RAG framework to generate a customer-support bot — offered to website owners on a subscription model with analytics.

### Objectives

- Chatbot integration for website owners.
- Subscription-based access to the AI chatbot.
- User account & subscription management with performance analytics.

### Tools

MERN · Node.js & Express · Selenium / deep-crawl · Python (LLM) · ChromaDB

### Process

1. Scrape data from user-submitted (domain-specified) URLs via web crawling.
2. Classify scraped content with NLP techniques.
3. Generate a customer-support bot with an LLM (RAG framework).
4. Design and develop a scalable API with UI and query handling.

### Results

- Per-website support bots built from each owner's own content.
- Subscription, account management and analytics dashboards.

### Learnings

- Reliable crawling + content classification underpins answer quality.
- RAG keeps responses anchored to a site's real information.

### Media

- Cover (design) — `images/case-studies/botnist-support-chatbot/cover.webp`
- Full report — `assets-pdfs/botnist-support-chatbot.pdf`

---

## WebWeave — Semantic Site Crawler & Data Extractor

`/case-studies/webweave-semantic-crawler` · Web & Data · 2025

*Parses any website into structured, classified, RAG-ready data.*

**Tags** — Python · BeautifulSoup · Selenium · MongoDB · Regex · SHA-256

### Overview

A web application that crawls arbitrary websites and extracts structured information — contact info, company overview, services, legal sections — using keyword-driven logic. The cleaned, deduplicated, formatted output is stored in MongoDB for later retrieval or chatbot integration.

### Objectives

- Extract meaningful content from arbitrary websites.
- Tag and classify data by category (overview, services, team, legal, contact).
- Persist results to MongoDB with an SHA-256 key to identify crawls uniquely.

### Tools

Python · BeautifulSoup · Selenium · MongoDB · Regex

### Process

1. User submits a URL; crawler loads the root page and discovers internal links.
2. Categorize content with predefined keyword buckets; deduplicate to avoid repetition.
3. Save outputs as a file-saving pipeline and upload final data with a hash key.
4. Return an easily-consumable JSON response to the frontend.

### Results

- Successfully extracted structured content from real-world domains.
- High keyword-categorization coverage with clean, deduplicated JSON output.

### Learnings

- Robust crawling must handle inconsistent structure and noise.
- Memory control on large pages + dedup keep the pipeline efficient.

### Media

- Cover (design) — `images/case-studies/webweave-semantic-crawler/cover.webp`
- Full report — `assets-pdfs/webweave-semantic-crawler.pdf`

---

## Decentralized Blockchain for Remote Code Execution

`/case-studies/blockchain-remote-code-execution` · Web & Data · 2024

*IPFS + Proof-of-Work for secure, reliable distributed task execution.*

**Tags** — Blockchain · IPFS · Proof of Work · Distributed Systems

### Overview

A decentralized blockchain that supports remote code execution. It uses IPFS and Proof of Work to execute code by storing hash references to code and data files, aiming to ensure secure, reliable task execution across distributed networks.

### Objectives

- Enable secure remote execution of code in a distributed network.
- Use IPFS for distributed storage of code and data.
- Anchor execution in a tamper-proof blockchain.

### Tools

IPFS · Blockchain · Proof of Work

### Process

1. Client sends hashes of code and data stored on IPFS.
2. Nodes download code/data from IPFS based on the received hashes.
3. Execute the code and create transactions.
4. Store transactions in the blockchain using Proof of Work.

### Results

- IPFS provided an effective distributed-storage solution.
- Blockchain integration ensured tamper-proof execution records.

### Learnings

- Understood the real challenges of decentralized system design.
- Hash-referenced storage keeps on-chain data light.

### Media

- Cover (design) — `images/case-studies/blockchain-remote-code-execution/cover.webp`
- Full report — `assets-pdfs/blockchain-remote-code-execution.pdf`

---

## BrickBreaker — Retro Arcade in x86 Assembly

`/case-studies/brickbreaker-x86-assembly` · Systems & Games · 2024

*A full game engine hand-coded in x86 Assembly with direct VGA rendering.*

**Tags** — x86 Assembly · MASM · DOSBox · VGA · Keyboard ISR

### Overview

A classic brick-breaking arcade game, reinvented and built from scratch in x86 Assembly with a modern, minimalist approach. It demonstrates system-level mastery through direct VGA mode access, custom keyboard interrupt handling, and low-level memory optimization.

### Objectives

- Demonstrate system-level mastery by hand-coding a full game engine in Assembly.
- Match the frame-rate and precision of commercial retro games.

### Tools

MASM assembler · DOSBox · Custom SVG assets

### Process

1. Direct VGA mode access for rendering; keyboard ISR for input.
2. Stepwise build: bootstrapping, draw loop, input handling, rendering.
3. Bitwise collision detection and frame-perfect movement.

### Results

- A smooth-playing, nostalgic arcade experience in pure Assembly.
- Hyper-responsive input via custom keyboard interrupt handling.

### Learnings

- Insight into how graphics, input, and physics interact at the machine level.
- Validated incremental, low-level programming methodologies.

### Media

- Cover (design) — `images/case-studies/brickbreaker-x86-assembly/cover.webp`
- Full report — `assets-pdfs/brickbreaker-x86-assembly.pdf`

---

## RushHour — Dynamic Passenger Pickup Game in C++

`/case-studies/rushhour-cpp-game` · Systems & Games · 2024

*A real-time arcade driving game with escalating difficulty.*

**Tags** — C++ · SFML / SDL · OOP · Data Structures

### Overview

A fast-paced, real-time 2D arcade game in C++ where players drive a car to pick up and drop off randomly spawned passengers while avoiding traffic. Each successful drop-off intensifies the challenge with more traffic and obstacles.

### Objectives

- Build a real-time arcade game with random events and difficulty scaling.
- Encourage player skill development through a timed scoring system.

### Tools

C++ · SFML / SDL · Queues & arrays · Timers

### Process

1. Grid-based map design with roads, spawn zones and static obstacles.
2. Arrow-key vehicle control with collision detection.
3. Passenger queue system for pickup/drop-off with score tracking.
4. Difficulty scaling: each drop-off adds cars and speed; Top-10 leaderboard in a file.

### Results

- Smooth collision logic and frame-rate stability under heavy game state.
- Persistent leaderboard maintained across sessions.

### Learnings

- Efficient memory usage and object pooling matter for real-time games.
- Applied classical OOP principles to game development logic.

### Media

- Cover (design) — `images/case-studies/rushhour-cpp-game/cover.webp`
- Full report — `assets-pdfs/rushhour-cpp-game.pdf`

---

## MentorMe — Hiring On-The-Go App

`/case-studies/mentorme-hiring-app` · Mobile App · 2025

*A smart mobile platform connecting mentors and talent in real time.*

**Tags** — Mobile · Real-time Chat · Scheduling · Booking

### Overview

MentorMe is a mobile-first platform that connects mentors and talent in real time — letting users discover mentors, view profiles and ratings, schedule sessions, chat live, and book and manage mentorship on the go.

### Objectives

- Connect mentors and mentees with real-time discovery and booking.
- Provide profiles, ratings, scheduling, chat and analytics.

### Tools

Mobile app framework · Real-time chat · Scheduling & booking · Profile management

### Process

1. Map the mentor/mentee journey: discover → profile → schedule → chat → book.
2. Build calendar-based session booking with time-slot selection.
3. Add live chat, upcoming sessions, ratings and a personalized feed.

### Results

- Seamless real-time scheduling and mentor discovery experience.
- Clean dashboards for sessions, ratings and profile management.

### Learnings

- Real-time UX (chat + availability) is central to a hiring platform.
- Clear information hierarchy keeps mobile flows fast and intuitive.

### Media

- Cover (design) — `images/case-studies/mentorme-hiring-app/cover.webp`
- Full report — `assets-pdfs/mentorme-hiring-app.pdf`

---

## WorkWise — Freelancing Application (Kotlin)

`/case-studies/workwise-freelancing-app` · Mobile App · 2025

*A mobile-first freelancing platform connecting clients and skilled professionals.*

**Tags** — Kotlin · Android · Marketplace · Real-time Messaging

### Overview

WorkWise is a mobile-first freelancing platform built in Kotlin, connecting clients with skilled professionals — inspired by platforms like Fiverr and Upwork. It supports gig discovery, posting, messaging, and hiring directly from the phone.

### Objectives

- Connect clients and freelancers in a mobile marketplace.
- Support gig discovery, posting, chat and hiring workflows.

### Tools

Kotlin · Android · Real-time messaging

### Process

1. Home + featured/popular gigs discovery with categories and search.
2. Gig detail, requirements, budget/timeline and apply flow.
3. In-app messaging and recommended-for-you feeds.
4. Freelancer profiles with skills, ratings, reviews and portfolio.

### Results

- Smooth gig browsing, posting and client–freelancer messaging.
- Profile, ratings and portfolio surfaces that build trust.

### Learnings

- Marketplace UX hinges on fast discovery and clear trust signals.
- Native Kotlin patterns keep the experience responsive.

### Media

- Cover (design) — `images/case-studies/workwise-freelancing-app/cover.webp`
- Full report — `assets-pdfs/workwise-freelancing-app.pdf`

---

## Image Classification using AlexNet on CIFAR-10

`/case-studies/alexnet-cifar10-classification` · Deep Learning · 2025 · *research report*

*A deep-learning CNN that classifies 60,000 images across 10 categories.*

**Headline metric — 84.6%** Test accuracy

**Tags** — Python · PyTorch · CNN · CUDA · Matplotlib · scikit-learn

### Overview

This project implements a convolutional neural network based on the AlexNet architecture to classify images from the CIFAR-10 dataset of 60,000 colour images across 10 categories. The aim was a high-performance CNN that balances generalization and training efficiency.

### Objectives

- Implement an AlexNet-style model using PyTorch.
- Achieve over 80% accuracy on the CIFAR-10 dataset.
- Apply data augmentation and regularization techniques.

### Tools

Python · PyTorch · Matplotlib & scikit-learn · CUDA GPU · CIFAR-10 dataset

### Process

1. Input CIFAR-10 images → data augmentation (random crop, flip, colour jitter).
2. AlexNet CNN: 3 convolutional blocks (ReLU, BatchNorm, MaxPooling) → fully-connected 1024 → 512 → 10.
3. Training: CrossEntropyLoss, Adam (LR 0.001, weight decay 1e-4), StepLR scheduler, 50 epochs, batch size 128.
4. Evaluation via accuracy and a confusion matrix.

### Results

- Final training accuracy ~90%, test accuracy 84.62%.
- Overfitting reduced via augmentation and dropout.
- Confusion matrix showed balanced class-wise accuracy.

### Learnings

- Data augmentation improves generalization significantly.
- Classic architectures like AlexNet still perform well.
- Visualization tools are vital for model diagnostics.

### Media

- Cover (figure) — `images/case-studies/alexnet-cifar10-classification/fig-1.webp`
- Figure — `images/case-studies/alexnet-cifar10-classification/fig-1.webp` — Confusion matrix — CIFAR-10 classification with AlexNet
- Full report — `assets-pdfs/alexnet-cifar10-classification.pdf`

---

## Bag of Visual Words for Image Classification

`/case-studies/bovw-image-classification` · Computer Vision · 2025 · *research report*

*Classifying cats, chairs and cameras with SIFT, KMeans, KNN & SVM.*

**Headline metric — 95%** Best class accuracy (SVM)

**Tags** — Python · OpenCV · SIFT · KMeans · KNN · SVM

### Overview

A Bag of Visual Words (BoVW) pipeline for image classification using handcrafted SIFT descriptors, KMeans clustering, and KNN/SVM classifiers, classifying images of three object categories: cats, chairs, and cameras.

### Objectives

- Build a robust feature-extraction pipeline using SIFT.
- Apply KMeans to create a visual vocabulary.
- Train KNN and SVM models to classify unseen test images.
- Visualize histogram representations and predictions.

### Tools

Python · OpenCV · SIFT · KMeans · KNN & SVM · Matplotlib

### Process

1. Load images and convert to grayscale; extract SIFT keypoints and descriptors into a feature pool.
2. Cluster all descriptors with KMeans (k = 200) — each centre becomes a visual word.
3. Encode each image as a histogram of visual words.
4. Train KNN (k = 5) and a linear SVM on the histograms, then predict on unseen images.

### Results

- SVM outperformed KNN — Cat 90%, Chair 82%, Camera 95%.
- Histogram encoding drastically reduced image complexity.
- Visualizations helped debug class confusion.

### Learnings

- BoVW works effectively with SIFT and simple classifiers.
- Clustering + classical ML can build powerful vision systems.

### Media

- Cover (figure) — `images/case-studies/bovw-image-classification/fig-1.webp`
- Figure — `images/case-studies/bovw-image-classification/fig-1.webp` — Bag-of-Visual-Words classification result (1)
- Figure — `images/case-studies/bovw-image-classification/fig-2.webp` — Bag-of-Visual-Words classification result (2)
- Full report — `assets-pdfs/bovw-image-classification.pdf`

---

## Glaucoma Detection in Retinal Fundus Images

`/case-studies/glaucoma-detection-unet` · Computer Vision · 2025 · *research report*

*U-Net segmentation of optic cup & disc with automated CDR diagnosis.*

**Tags** — Python · U-Net · Segmentation · Medical Imaging · TensorFlow/Keras

### Overview

Glaucoma is the second-largest cause of blindness worldwide and needs early diagnosis. This project segments the optic cup and optic disc from retinal fundus images using a U-Net model, then derives a Cup-to-Disc Ratio (CDR) to flag likelihood of glaucoma — a system that works without excessive equipment or specialist time.

### Objectives

- Segment optic cup and optic disc from fundus images.
- Compute the Cup-to-Disc Ratio for diagnosis.
- Evaluate with accuracy, precision, recall and IoU.

### Tools

Python · U-Net (encoder/decoder) · OpenCV · TensorFlow / Keras

### Process

1. Preprocess: convert images to a uniform (256×256×1) grayscale format; build image, optic-cup and optic-disc lists by thresholding masks.
2. Build a U-Net from conv/encoder/decoder blocks (conv layers + BatchNorm + ReLU, max-pool down, transpose-conv up with skip connections).
3. Train on the dataset (batch size 2, 25–30 epochs).
4. Predict masks, compute CDR; CDR > 0.4 → high likelihood of glaucoma.

### Results

- High segmentation accuracy (optic disc & cup accuracy > 0.98).
- Automated CDR-based diagnosis with per-task precision/recall/IoU.

### Learnings

- Consistent preprocessing (fixed input shape) is critical for U-Net.
- Skip connections preserve spatial detail for fine segmentation.

### Media

- Cover (figure) — `images/case-studies/glaucoma-detection-unet/fig-1.webp`
- Figure — `images/case-studies/glaucoma-detection-unet/fig-1.webp` — U-Net architecture for optic cup & disc segmentation
- Figure — `images/case-studies/glaucoma-detection-unet/fig-2.webp` — Predicted vs original cup/disc masks
- Figure — `images/case-studies/glaucoma-detection-unet/fig-3.webp` — Segmentation metrics with predicted masks
- Figure — `images/case-studies/glaucoma-detection-unet/fig-4.webp` — Predicted vs original masks (sample 2)
- Figure — `images/case-studies/glaucoma-detection-unet/fig-5.webp` — Predicted vs original masks (sample 3)
- Figure — `images/case-studies/glaucoma-detection-unet/fig-6.webp` — Predicted vs original masks (sample 4)
- Full report — `assets-pdfs/glaucoma-detection-unet.pdf`

---

## Signature Recognition using CNN

`/case-studies/signature-recognition-cnn` · Computer Vision · 2025 · *research report*

*Comparing CNN feature learning against classical HOG / SIFT for signatures.*

**Tags** — Python · CNN · HOG · SIFT · OpenCV

### Overview

A signature-recognition study that processes signature images, extracts features, and classifies signatures by individual ID. It benchmarks CNN-based feature extraction against traditional techniques (HOG and SIFT), with a full segmentation and train/test pipeline.

### Objectives

- Segment and preprocess signature samples (normalize, denoise, isolate).
- Classify signatures by signer identity.
- Compare CNN feature extraction with HOG and SIFT.

### Tools

Python · CNN · HOG · SIFT · OpenCV

### Process

1. Collect a labelled signature dataset (16 images × 12 rows × 4 signatures).
2. Preprocess: normalize, reduce noise, segment signatures from background.
3. Train a CNN (conv + pooling + dense) and evaluate with accuracy, precision, recall and F-measure.
4. Generate confusion matrices for HOG and CNN.

### Results

- On this small dataset, HOG features gave the strongest scores; CNN highlighted the need for more data.
- Regularization mitigated early overfitting.

### Learnings

- Signature-style variability demands robust preprocessing.
- Classical descriptors remain strong baselines on tiny datasets.

### Media

- Cover (figure) — `images/case-studies/signature-recognition-cnn/fig-1.webp`
- Figure — `images/case-studies/signature-recognition-cnn/fig-1.webp` — Confusion matrix — signature recognition (1)
- Figure — `images/case-studies/signature-recognition-cnn/fig-2.webp` — Confusion matrix — signature recognition (2)
- Full report — `assets-pdfs/signature-recognition-cnn.pdf`

---

## VAE & Simple GAN for Signature Generation

`/case-studies/vae-gan-signature-generation` · Generative AI · 2024 · *research report*

*Generating realistic synthetic signatures with a VAE and a GAN.*

**Tags** — PyTorch · VAE · GAN · Data Augmentation

### Overview

An implementation of a Variational Autoencoder (VAE) and a Generative Adversarial Network (GAN) to generate realistic fake signatures. The VAE learns latent representations by encoding and reconstructing signatures; the GAN's generator creates new signatures from noise while a discriminator judges realism.

### Objectives

- Learn meaningful latent representations of signatures with a VAE.
- Generate convincing synthetic signatures with a GAN.
- Improve robustness on a limited dataset via augmentation.

### Tools

PyTorch · VAE (encoder/decoder) · GAN (generator/discriminator)

### Process

1. Augment the dataset (rotation, horizontal flip, Gaussian noise) for diversity.
2. Train the VAE with combined reconstruction + KL-divergence loss.
3. Train the GAN with binary cross-entropy adversarial loss.
4. Evaluate via reconstruction loss and qualitative comparison to real signatures.

### Results

- VAE achieved low reconstruction loss; GAN produced high-quality, realistic signatures.
- Generated samples retained distinctive features of the originals.

### Learnings

- VAE structural understanding + GAN realism are complementary.
- Augmentation meaningfully enriches small training sets.

### Media

- Cover (figure) — `images/case-studies/vae-gan-signature-generation/fig-1.webp`
- Figure — `images/case-studies/vae-gan-signature-generation/fig-1.webp` — Generated signature samples (1)
- Figure — `images/case-studies/vae-gan-signature-generation/fig-2.webp` — Generated signature samples (2)
- Figure — `images/case-studies/vae-gan-signature-generation/fig-3.webp` — Generated signature samples (3)
- Figure — `images/case-studies/vae-gan-signature-generation/fig-4.webp` — Generated signature samples (4)
- Figure — `images/case-studies/vae-gan-signature-generation/fig-5.webp` — Generated signature samples (5)
- Full report — `assets-pdfs/vae-gan-signature-generation.pdf`

---

## Hallucination Detection with Logistic Regression

`/case-studies/hallucination-detection-logistic-regression` · NLP · 2025 · *research report*

*A lightweight, from-scratch classifier flagging factual vs hallucinated summaries.*

**Tags** — Python · NumPy · Bag of Words · Logistic Regression · scikit-learn

### Overview

A factuality classifier that labels generated text summaries as factual or hallucinated, using a custom logistic-regression model built from scratch with NumPy and Bag-of-Words features. It shows that simple, interpretable models can compete on factuality detection.

### Objectives

- Detect hallucinated summaries with binary classification.
- Build logistic regression without external ML libraries.
- Extract features with Bag of Words and analyze errors.

### Tools

Python · pandas · NumPy · scikit-learn (evaluation only)

### Process

1. Load the XSum Hallucination dataset (summary + is_factual).
2. Clean and tokenize text; build a BoW vocabulary and feature vectors.
3. Implement logistic regression (sigmoid + gradient descent, cross-entropy loss).
4. Evaluate with accuracy/precision/recall/F1 and k-fold cross-validation.

### Results

- Strong, consistent scores across folds despite model simplicity.
- Error analysis surfaced hallucination cues: vague terms, wrong entities, abstractions.

### Learnings

- Simple models yield meaningful NLP insights; BoW is a strong baseline.
- Building from scratch deepens understanding of optimization.

### Media

- Full report — `assets-pdfs/hallucination-detection-logistic-regression.pdf`
- *No images — PDF only.*

---

## Word Completion using LSTM

`/case-studies/word-completion-lstm` · NLP · 2024 · *research report*

*Real-time next-word suggestions from an LSTM trained on Shakespeare.*

**Headline metric — 90%** Model accuracy

**Tags** — Python · TensorFlow · LSTM · RNN

### Overview

A word-level LSTM model for sentence completion, trained on Shakespeare's plays (111,396 lines; 11,000 used for training). A real-time interface suggests words as the user types, achieving ~90% accuracy with strong coherence and fluency.

### Objectives

- Predict the next word in a sequence from prior context.
- Build a responsive interface for live word suggestions.
- Tune hyperparameters for coherence, fluency and accuracy.

### Tools

Python · TensorFlow / Keras · LSTM

### Process

1. Clean and lowercase text; tokenize; build word sequences.
2. Model: input layer → LSTM layer(s) → dense softmax over vocabulary.
3. Train with the forget/input/output gate mechanics of LSTM.
4. Serve predictions via a UI that takes a seed sentence + word count.

### Results

- ~90% training accuracy with closely-matched validation accuracy.
- Coherent, fluent generations; clear improvement over a vanilla RNN.

### Learnings

- LSTM gating beats plain RNNs on long-term dependencies.
- Balancing complexity prevents overfitting while keeping accuracy high.

### Media

- Cover (figure) — `images/case-studies/word-completion-lstm/fig-1.webp`
- Figure — `images/case-studies/word-completion-lstm/fig-1.webp` — Word completion interface (1)
- Figure — `images/case-studies/word-completion-lstm/fig-2.webp` — Word completion interface (2)
- Figure — `images/case-studies/word-completion-lstm/fig-3.webp` — Word completion interface (3)
- Full report — `assets-pdfs/word-completion-lstm.pdf`

---

