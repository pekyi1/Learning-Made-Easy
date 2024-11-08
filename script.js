const topics = {
  'Mathematics': [
    'Angles',
    'Trigonometry',
    'Sequence & Series',
    'Circle Theorem',
    'Sets',
    'Surds',
    'Relations & Functions',
    'Mensuration',
    'Logical Reasoning',
    'Linear Equations & Inequalities',
    'Indices & Logarithm',
    'Plane Geometry',
    'Bearings & Vectors',
    'Permutation & Combination',
    'Calculus',
    'Modulo Arithmetic',
    'Algebra',
    'Probability & Statistics',
    'Number Systems',
    'Variation',
    'Matrices'
  ],
  'Science': ['Physics', 'Chemistry', 'Biology'],
  'Literature': ['Poetry', 'Drama', 'Classic Novels']
};

function toggleSidebar(subject) {
  const sidebar = document.getElementById('sidebar');
  const sidebarTitle = document.getElementById('sidebar-title');
  const sidebarTopics = document.getElementById('sidebar-topics');

  if (subject) {
    sidebarTitle.textContent = `Topics in ${subject}`;
    sidebarTopics.innerHTML = topics[subject]
                                  .map(
                                      topic => `
                <li><a href="summary.html?topic=${encodeURIComponent(topic)}">${
                                          topic}</a></li>
            `).join('');
  }

  sidebar.classList.toggle('show');
}

function closeSidebarOnClick(event) {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('show') && !sidebar.contains(event.target)) {
    sidebar.classList.remove('show');
  }
}
