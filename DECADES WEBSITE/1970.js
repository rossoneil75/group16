function highlightSection(sectionId) {
    // Remove highlight from all sections
    document.querySelectorAll('.article').forEach(section => {
        section.classList.remove('highlight');
    });

    // Add highlight to the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('highlight');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to the section

        // Remove the highlight class after the fade-out animation
        setTimeout(() => {
            section.classList.remove('highlight');
        }, 3500); // 3 seconds for fade-out + 0.5 seconds for pop-out
    }
}