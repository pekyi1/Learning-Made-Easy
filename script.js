const summaries = {
  'Angles': {
    title: 'Angles',
    content: [
      'An angle is the figure formed by two rays meeting at a common endpoint.',
      'Types of Angles',
      'Acute angles are less than 90 degrees, while obtuse angles are more than 90 degrees.',
      'Applications of Angles',
      'Angles play an important role in fields such as architecture and engineering.'
    ],
    subtopics: ['Types of Angles', 'Applications of Angles']
  },
  'Trigonometry': {
    title: 'Trigonometry',
    content: [
      'Trigonometry studies the relationships between side lengths and angles in triangles.',
      'Basic Trigonometric Functions',
      'The sine, cosine, and tangent functions are used to calculate unknowns in right triangles.'
    ],
    subtopics: ['Basic Trigonometric Functions']
  }
  // Additional topics can be added here
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function loadSummary() {
  const topic = getQueryParam('topic');
  const summary = summaries[topic];

  const titleElement = document.getElementById('summary-title');
  const textElement = document.getElementById('summary-text');

  if (summary) {
    titleElement.textContent = summary.title;
    textElement.innerHTML = '';  // Clear loading text

    // Display each paragraph with an animation delay
    summary.content.forEach((paragraph, index) => {
      const pElement = document.createElement('p');
      if (summary.subtopics.includes(paragraph)) {
        pElement.innerHTML = `<span class="subtopic">${paragraph}</span>`;
      } else {
        pElement.textContent = paragraph;
      }
      textElement.appendChild(pElement);

      // Add animation with delay for each paragraph
      setTimeout(() => {
        pElement.classList.add('visible');
      }, index * 250);  // 500ms delay between each paragraph
    });
  } else {
    titleElement.textContent = 'Summary not found';
    textElement.textContent = 'The topic you are looking for does not exist.';
  }
}

// Load the summary when the page loads
window.onload = loadSummary;