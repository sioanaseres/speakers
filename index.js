document.addEventListener('DOMContentLoaded', function(){
    const modal = document.querySelector('.modal')
    const modalContainer = document.querySelector('.modal__container')
    const closeBtn = document.querySelector('.modal__button--close')
    const speakersCards = document.querySelectorAll('.speakers__container-item')
    const modalSpeakerName = document.querySelector('.modal__header h2')
    const modalSpeakerText = document.querySelector('.modal__content')

    const speakers = {
    
          "Ana Applgate": {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nisi eget neque tincidunt dapibus. Nam eget posuere ipsum, in efficitur neque. Aenean nec porttitor purus. Nunc varius, dui at feugiat porttitor, dolor sapien rhoncus tortor, sit amet elementum justo sem elementum augue. Vestibulum pulvinar lacus vitae massa hendrerit posuere. Proin et leo ipsum. Proin tempor elit in placerat rhoncus. <br> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nisi eget neque tincidunt dapibus. Nam eget posuere ipsum, in efficitur neque. Aenean nec porttitor purus. Nunc varius, dui at feugiat porttitor, dolor sapien rhoncus tortor, sit amet elementum justo sem elementum augue. Vestibulum pulvinar lacus vitae massa hendrerit posuere. Proin et leo ipsum. Proin tempor elit in placerat rhoncus. <br> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nisi eget neque tincidunt dapibus. Nam eget posuere ipsum, in efficitur neque. Aenean nec porttitor purus. Nunc varius, dui at feugiat porttitor, dolor sapien rhoncus tortor, sit amet elementum justo sem elementum augue. Vestibulum pulvinar lacus vitae massa hendrerit posuere. Proin et leo ipsum. Proin tempor elit in placerat rhoncus."
          },
          "Shaun Le Noir": {
            description: "Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. <br><br> Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. <br><br>Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. <br> <br>Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. <br><br> Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. <br><br>Fusce ac molestie nulla. Aenean imperdiet, nunc id suscipit fringilla, nisl odio lacinia ipsum, at consequat neque lorem sed neque. Nam et felis sit amet libero pharetra ullamcorper nec in sapien. "
          },
          "Alina McKey": {
            description: "Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. <br><br> Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. <br><br> Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. <br><br>Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. <br><br>Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. <br><br> Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. <br><br> Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. <br><br>Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. <br><br> Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. <br><br> Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus. <br><br>Nam convallis purus ut sagittis convallis. Praesent in risus commodo, consectetur mauris nec, euismod nisi. Mauris sit amet lacus vel augue cursus tempus non ac metus."
          },
          "Mike Tailor": {
            description: "Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br><br> Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br><br>Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br><br>Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br><br>Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br><br>Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br><br>Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br><br>Sed sodales, tortor in viverra aliquet, ligula lectus facilisis purus, vitae fringilla arcu purus sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
          },
          "Mary Poppins": {
            description: "Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper.<br><br>Cras aliquet et mi at vestibulum. Aenean a efficitur lorem, posuere mattis turpis. In scelerisque sit amet turpis accumsan convallis. Ut non diam eu tortor commodo semper."
          },
          "Calvin Klein": {
            description: "Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. <br><br>Fusce rhoncus leo vel urna laoreet condimentum. Cras dignissim enim vel tellus dictum sodales. Phasellus ac facilisis orci, feugiat ultricies arcu. Sed fermentum nisl nec metus venenatis malesuada. "
          },
          "Angela Soares": {
            description: "Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit.<br><br>Nam nisl ex, pellentesque sed vehicula in, luctus non nibh. Ut ornare dapibus feugiat. Donec ut rhoncus magna, vitae volutpat elit. Nunc congue porta velit at blandit."
          },
          "Antony Shimmer": {
            description: "Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Aenean vel diam nulla. Morbi ornare volutpat elit ac iaculis. Aliquam ac augue imperdiet leo convallis vulputate varius et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>"
          }
        
        };
    function openModal(name, text){
        modal.style.display = 'flex'
        modal.style.opacity = 1
        modal.style.visibility = 'visible'
        modalSpeakerName.textContent = name
        modalSpeakerText.innerHTML = text
        setTimeout(function(){
            modalContainer.style.transform = 'translateY(0)'
        },10)
        }


    function closeModal (){
        modal.style.display='none';
        modal.style.opacity = 0
        modal.style.visibility = 'hidden'
        modalContainer.style.transform = 'translateY(-20px)'

    }
    closeBtn.addEventListener('click', closeModal)
    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape' || event.key === 'Esc'){
            closeModal()
        }
    })

    speakersCards.forEach(function(speakerCard){
        speakerCard.addEventListener('click', function(event){
            const speakerName = speakerCard.querySelector('.speakers__name').textContent
            const speaker = speakers[speakerName]
            if (speaker){
                const text = `<p> ${speaker.description}  </p>`
                const position = {
                    top: event.clientY,
                    left: event.clientX
                    };
                openModal(speakerName, text, position)
            }
        })
    })
})