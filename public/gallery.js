
function redirectToAbout() {
  window.location.href = '/about#appoint';
}


$(document).ready(function() {
    // Initialize the carousel
    $('#carouselExampleIndicators').carousel();
  
    // Set the interval for auto-sliding (optional)
    $('#carouselExampleIndicators').carousel({
      interval: 3000 // Change the value (in milliseconds) as needed
    });
  
    // Pause the carousel on mouseover (optional)
    $('#carouselExampleIndicators').carousel('pause');
  
    // Previous slide button
    $('.carousel-control-prev').click(function() {
      $('#carouselExampleIndicators').carousel('prev');
    });
  
    // Next slide button
    $('.carousel-control-next').click(function() {
      $('#carouselExampleIndicators').carousel('next');
    });
  });


  // Initialize Owl Carousel
$('.featured-carousel').owlCarousel({
  items: 3, // Set the number of visible items here
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    }
  }
});

  
  
const galleryContainer = document.getElementById('gallery-container');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal');


// Array of gallery items (images and videos)
const galleryItems = [
    {
        type: 'video',
        src: 'images/VID-20230528-WA0003.mp4',
       
    },
    {
        type: 'image',
        src: 'images/pic19.jpg',
       
      },
    // Add more items as needed
    {
        type: 'image',
        src: 'images/pic12.jpg',
       
    },
    {
        type: 'image',
        src: 'images/IMG-20230528-WA0008.jpg',
        
    },
    {
        type: 'video',
        src: 'images/VID-20230528-WA0004.mp4',
        
    },
    {
        type: 'image',
        src: 'images/IMG-20230528-WA0018.jpg',
        
    },
    {
        type: 'image',
        src: 'images/IMG-20230528-WA0049.jpg',
       
    },
    {
        type: 'image',
        src: 'images/IMG-20230528-WA0048.jpg',
       
      },
      {
        type: 'video',
        src: 'images/vid2.mp4',
      
    },
    {
        type: 'image',
        src: 'images/IMG-20230528-WA0033.jpg',
        
    },
    {
        type: 'image',
        src: 'images/IMG-20230528-WA0029.jpg',
       
    },
    {
        type: 'image',
        src: 'images/IMG-20230528-WA0028.jpg',
        
      },
];

 // Function to create a gallery item element
 function createGalleryItem(item) {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';

  if (item.type === 'image') {
    const image = document.createElement('img');
    image.src = item.src;
    galleryItem.appendChild(image);

    // Add click event listener to open modal
    image.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImage.src = item.src;
    });
  } else if (item.type === 'video') {
    const video = document.createElement('video');
    video.src = item.src;
    video.controls = true;
    galleryItem.appendChild(video);

    // Add click event listener to open modal
    video.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImage.src = item.src;
    });
  }

  const overlay = document.createElement('div');
  overlay.className = 'gallery-item-overlay';

  const title = document.createElement('h2');
  title.textContent = item.title;
  overlay.appendChild(title);

  const description = document.createElement('p');
  description.textContent = item.description;
  overlay.appendChild(description);

  galleryItem.appendChild(overlay);

  return galleryItem;
}

// Render the gallery items
galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  galleryContainer.appendChild(galleryItem);
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
  modalImage.src = '';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    modalImage.src = '';
  }
});