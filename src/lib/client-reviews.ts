export type ClientReview = {
  id: number;
  name: string;
  country: string;
  rating: number;
  image: string;
  review: string;
};

const REVIEW_VISUAL = "/images/client-reviews/review-visual-01.webp";

export const CLIENT_REVIEWS: ClientReview[] = [
  { id: 1, name: "lorenzo_bruno2", country: "Italy", rating: 5, image: REVIEW_VISUAL, review: "Excellent Flutter developer! The loading indicator was added perfectly, and the login button now stays disabled during the API request. The work was delivered on time, communication was professional, and the existing login flow remained fully functional. Highly recommended for Flutter app development and UI improvements." },
  { id: 2, name: "rlleyelderson", country: "Canada", rating: 5, image: REVIEW_VISUAL, review: "Great experience! Delivered a high-quality mobile app using Flutter with smooth performance on Android & iOS. Excellent UI/UX, strong AI features, and professional communication. Highly recommended for mobile app development, Flutter, React Native, and AI app projects." },
  { id: 3, name: "dorotheajmay12", country: "United Kingdom", rating: 5, image: REVIEW_VISUAL, review: "My experience with this developer was really smooth from start to finish. He understood everything and handled the whole process in a very professional and reliable way. I am genuinely happy overall and would definitely work with him again." },
  { id: 4, name: "kaitlyn1ward", country: "United States", rating: 5, image: REVIEW_VISUAL, review: "Excellent Flutter developer! The UI overflow issue was fixed quickly and professionally. The layout is now fully responsive across different screen sizes. Great communication, fast delivery, and strong expertise in Flutter, mobile app development, and UI bug fixing. Highly recommended!" },
  { id: 5, name: "tinaottoo", country: "Germany", rating: 5, image: REVIEW_VISUAL, review: "Great experience working with Safdar. They understood my appointment booking app idea clearly and provided useful guidance on the app flow, required screens, MVP features, and technology options like Flutter and React Native. The delivery was clear, professional, and helpful for planning my next step. Highly recommended." },
  { id: 6, name: "olivermartin194", country: "Canada", rating: 5, image: REVIEW_VISUAL, review: "Great experience working with Safdar. They quickly understood the React Native update I needed and implemented the Forgot Password feature with Firebase Authentication properly. The delivery was fast, smooth, and professionally handled. Highly recommended." },
  { id: 7, name: "victorhillip", country: "United Kingdom", rating: 5, image: REVIEW_VISUAL, review: "Great experience working with this seller. They understood my mobile app idea clearly and provided helpful guidance for the app features, screen flow, MVP structure, and development approach. The delivery was clear, professional, and useful for planning the next step of my project." },
  { id: 8, name: "karollnabaszczy", country: "Poland", rating: 5, image: REVIEW_VISUAL, review: "Excellent Flutter developer! Updated the app logo and splash screen exactly as requested. Fast delivery, great communication, and professional mobile app development skills. Highly recommended for Flutter app updates, UI changes, and mobile app maintenance." },
  { id: 9, name: "mikael_nil", country: "Sweden", rating: 5, image: REVIEW_VISUAL, review: "Outstanding Flutter developer! Fixed the Firebase push notification issue quickly and professionally. Strong expertise in mobile app development, Flutter, Firebase Cloud Messaging (FCM), and bug fixing. Great communication, fast delivery, and high-quality work. Highly recommended for Flutter app development and mobile app maintenance." },
  { id: 10, name: "joseriley", country: "Mexico", rating: 5, image: REVIEW_VISUAL, review: "Great experience! The Job Splash login screen was beautifully designed and delivered on time. Professional communication, excellent UI/UX skills, and strong expertise in mobile app development. Highly recommended!" },
  { id: 11, name: "jeremycrosss", country: "United States", rating: 5, image: REVIEW_VISUAL, review: "Excellent mobile app development service! Push notifications were integrated perfectly into my Flutter app, with seamless performance on Android and iOS. Communication was professional, delivery was on time, and the work quality is top-notch. Highly recommended for mobile app development, Flutter app updates, and cross-platform app features." },
];
