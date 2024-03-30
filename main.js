window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}

 


const accordianfaqs = document.querySelectorAll(".accordianfaq");
accordianfaqs.forEach( accordianfaq => {
  accordianfaq.addEventListener("click", () =>{
    accordianfaq.classList.toggle("active");
    })
})



const accordianhamburgers = document.querySelectorAll(".accordianhamburger");
accordianhamburgers.forEach( accordianhamburger => {
  accordianhamburger.addEventListener("click", () =>{
    accordianhamburger.classList.toggle("active");
    })
})





document.addEventListener("DOMContentLoaded", function () {
	const aboutCourseContainers = document.querySelectorAll(".about-course-years");
	const totalPages = aboutCourseContainers.length;
	const paginationContainer = document.querySelector(".pagination");
  
	const nextButton = document.createElement("button");
	nextButton.textContent = "Next";
	nextButton.addEventListener("click", function () {
	  showNextPage();
	});
  
	const prevButton = document.createElement("button");
	prevButton.textContent = "Previous";
	prevButton.addEventListener("click", function () {
	  showPreviousPage();
	});
  
	paginationContainer.appendChild(prevButton);
	paginationContainer.appendChild(nextButton);
  
	function showPage(pageNumber) {
	  aboutCourseContainers.forEach((container, index) => {
		container.style.display = index + 1 === pageNumber ? "block" : "none";
	  });
	}
  
	function showNextPage() {
	  const currentPage = getCurrentPage();
	  if (currentPage < totalPages) {
		showPage(currentPage + 1);
	  }
	}
  
	function showPreviousPage() {
	  const currentPage = getCurrentPage();
	  if (currentPage > 1) {
		showPage(currentPage - 1);
	  }
	}
  
	function getCurrentPage() {
	  for (let i = 0; i < aboutCourseContainers.length; i++) {
		if (aboutCourseContainers[i].style.display === "block") {
		  return i + 1;
		}
	  }
	  return 1;
	}
  
	showPage(1);
  });


// paggination for referance

document.addEventListener("DOMContentLoaded", function () {
  const referenceContainers = document.querySelectorAll(".pagginationReferance");
  const totalReferencePages = referenceContainers.length;
  const paginationReferenceContainer = document.querySelector(".paginationReference");

  const nextReferenceButton = document.createElement("button");
  nextReferenceButton.textContent = "Next";
  nextReferenceButton.addEventListener("click", function () {
    showNextReferencePage();
  });

  const prevReferenceButton = document.createElement("button");
  prevReferenceButton.textContent = "Previous";
  prevReferenceButton.addEventListener("click", function () {
    showPreviousReferencePage();
  });

  paginationReferenceContainer.appendChild(prevReferenceButton);
  paginationReferenceContainer.appendChild(nextReferenceButton);

  function showReferencePage(pageNumber) {
    referenceContainers.forEach((container, index) => {
      container.style.display = index + 1 === pageNumber ? "block" : "none";
    });
  }

  function showNextReferencePage() {
    const currentReferencePage = getCurrentReferencePage();
    if (currentReferencePage < totalReferencePages) {
      showReferencePage(currentReferencePage + 1);
    }
  }

  function showPreviousReferencePage() {
    const currentReferencePage = getCurrentReferencePage();
    if (currentReferencePage > 1) {
      showReferencePage(currentReferencePage - 1);
    }
  }

  function getCurrentReferencePage() {
    for (let i = 0; i < referenceContainers.length; i++) {
      if (referenceContainers[i].style.display === "block") {
        return i + 1;
      }
    }
    return 1;
  }

  showReferencePage(1);
});




// read more jquery for testimonial

const parentContainer = document.querySelector('.read-more-container');
parentContainer.addEventListener('click', event => {
  const current = event.target;
  const isReadMoreBtn = current.classList.contains('read-more-btn');

  if (!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector('.read-more-text');
  currentText.classList.toggle('read-more-text--show');

  current.textContent = currentText.classList.contains('read-more-text--show') ?
    "Read Less..." : "Read More...";
});




const snippets = document.querySelectorAll('.snippet');

for (let i = 0; i < snippets.length; i++) {
  snippets[i].addEventListener('mouseleave', clearTooltip);
  snippets[i].addEventListener('blur', clearTooltip);
}

function showTooltip(el, msg) {
  el.setAttribute('class', 'snippet tooltip');
  el.setAttribute('aria-label', msg);
}

function clearTooltip(e) {
  e.currentTarget.setAttribute('class', 'snippet');
  e.currentTarget.removeAttribute('aria-label');
}

const clipboardSnippets = new ClipboardJS('.snippet', {
  text: trigger => trigger.getAttribute('data-title')
});

clipboardSnippets.on('success', e => {
  e.clearSelection();
  showTooltip(e.trigger, 'Copied!');
});

clipboardSnippets.on('error', e => {
  showTooltip(e.trigger, 'Copy failed!');
});


