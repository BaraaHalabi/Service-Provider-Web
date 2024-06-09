// src/utils/faqMatcher.js
const natural = require("natural");
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

// List of FAQ questions
const faqQuestions = [
  "How can I reset my password?",
  "Where can I find the user manual?",
  "How do I contact customer support?",
  "What is your return policy?",
  "How can I track my order?",
];

// Add documents to TfIdf
faqQuestions.forEach((question) => {
  tfidf.addDocument(question);
});

// Function to find the closest matching FAQ question using cosine similarity
export function findClosestQuestion(userQuery) {
  tfidf.addDocument(userQuery);

  let maxSimilarity = -1;
  let closestQuestion = "";

  tfidf.tfidfs(userQuery, (i, measure) => {
    if (measure > maxSimilarity) {
      maxSimilarity = measure;
      closestQuestion = faqQuestions[i];
    }
  });

  return closestQuestion;
}
