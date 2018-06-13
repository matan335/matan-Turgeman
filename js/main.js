'use strict'

function initPage() {
    renderModals()
    renderProjects()
    //TODO add a link to the index of the games-



    
}


var gProjs = [
    {
        id: `0`,
        name: `Book Shop`,
        title: `A Digital library full of books`,
        desc: `A library is a collection of sources of information and similar
        resources, made accessible to a defined community for reference or borrowing.
        [1] It provides physical or digital access to material, and may be a physical building or room,
        or a virtual space, or both.[2] A library's collection can include books, periodicals, newspapers,
        manuscripts, films, maps, prints, documents, microform, CDs, cassettes, videotapes, DVDs, Blu-ray Discs,
        e-books, audiobooks, databases, and other formats.`,
        url: `projs/sokoban`,
        publishedAt: `1448693940000`,
        labels: `[Matrixes, keyboard events]`,

    },
    {
        id: `1`,
        name: `Minesweepers`,
        title: `Join in and play the amazing game of Minesweepers `,
        desc: `Minesweeper is a single-player puzzle video game. The objective of the game
        is to clear a rectangular board containing hidden mines or bombs without detonating any+
        of them, with help from clues about the number of neighboring mines in each field.
        The game originates from the 1960s, and has been written for many computing platforms in use today.
        It has many variations and offshoots.,
        url: projs/sokoban`,
        publishedAt: `1448693940000`,
        labels: `[Matrixes, keyboard events]`,


    },
    {
        id: `2`,
        name: `Chess`,
        title: `Play Chess all the time? Join in for the digital Chess experience`,
        desc: `Chess is a two-player strategy board game played on a chessboard, a checkered gameboard with 64 squares arranged in an 8×8 grid.
        The game is played by millions of people worldwide. Chess is believed to have originated in India sometime before the 7th century. 
        The game was derived from the Indian game chaturanga, which is also the likely ancestor of the Eastern strategy games xiangqi, janggi, and shogi. 
        (A minority view holds that chess originated in China.) 
        Chess reached Europe by the 9th century, due to the Moorish conquest of Spain. 
        The pieces assumed their current powers in Spain in the late 15th century; 
        the rules were standardized in the 19th century.`,
        publishedAt: `1448693940000`,
        labels: `[Matrixes, keyboard events]`,


    },
    {
        id: `3`,
        name: `In pictures`,
        title:`Are you an expert in pictures? if you are ive got the game just for you`,
        desc: `a game where you click a picture's description and if you are correct youll be rewarded`,
        url: `projs/sokoban`,
        publishedAt: `1448693940000`,
        labels: `[Matrixes, keyboard events]`,


    },
    {
        id: `4`,
        name: `Pacman`,
        title: `Join in and play the amazing game of Pacman `,
        desc: `The player navigates Pac-Man through a maze containing various dots, 
        known as Pac-Dots, and four multi-colored ghosts: Blinky, Pinky, Inky, and Clyde. 
        The goal of the game is to accumulate points by eating all the Pac-Dots in the maze, 
        completing that 'stage' of the game and starting the next stage and maze of Pac-dots. Between some stages,
         one of three intermission animations plays.[23] The four ghosts roam the maze, trying to kill Pac-Man. 
         If any of the ghosts hit Pac-Man, he loses a life; when all lives have been lost, the game is over. 
         Pac-Man is awarded a single bonus life at 10,000 points by default—DIP switches inside the machine can change 
         the required points to 15,000 or 20,000, or disable the bonus life altogether. The number of lives can be set 
         to 1 life only or up to five lives maximum. High score cannot exceed 999,990 points; players may exceed that 
         score, but the game keeps the last 6 digits. There are 256 levels in total, however, when the game was made, 
         the memory ran out at 256, so it is only half loaded while the other half is a jumble of letters and digits.`,
        publishedAt: `1448693940000`,
        labels: `[Matrixes, keyboard events]`,

    },
    {
        id: `5`,
        name: `Bingo`,
        title: `Join in and play the amazing game of Minesweepers `,
        desc: ` Bingo is a game of chance in which each player matches numbers printed in different arrangements
         on a board, cards with the numbers the game host (caller) draws at random, marking the selected numbers 
         with tiles. When a player finds the selected numbers are arranged on their card in a row, they call out 
         "Bingo!" to alert all participants to a winning card, which prompts the game host 
         (or an associate assisting the host) to examine the card for verification of the win. 
         Players compete against one another to be the first to have a winning arrangement for the prize or jackpot. 
         After a winner is declared, the players clear their number cards of the tiles and the game host begins a 
         new round of play.`,
        publishedAt: `1448693940000`,
        labels: `[Matrixes, keyboard events]`,


    }
];

function goToGame(gameIdx){
    window.location.assign('projs\0\index')

}

function openModal(){
    $('.modal').css('display','block')
    $('.modal').css('overflow','visible')
    $('.modal').css('background-color','background-color: #00000085;')
}

function closeModal(){
    $('.modal').css('display','none')
    $('.modal').css('overflow','hidder')

}

function sumbit(){
  var mailContent=$('.mail-control').val()
   var subContent=$('.sub-control').val()
   var textContent=$('.form-control').val()
   window.location.assign(`https://mail.google.com/mail/?view=cm&fs=1&to=${mailContent}&su=${subContent}&body=${textContent}`)
    
}

function renderModals() {
    var renderModals = gProjs.map(function (proj) {
        var currProjNum = +proj.id + 1
        var renderModal =
            `   
            <div class="portfolio-modal modal fade" id="portfolioModal${currProjNum}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                  <div class="lr">
                    <div class="rl"></div>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8 mx-auto">
                      <div class="modal-body">
                       
                        <h2>${proj.name}</h2>
                        <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img class="img-fluid d-block mx-auto" src="img/portfolio/0${currProjNum}-full.jpg" alt="">
                        <p>${proj.desc}</p>
                        <ul class="list-inline">
                          <li>Date: January 2017</li>
                          <li>Client: Threads</li>
                          <li>Category: Illustration</li>
                        </ul>
                        <button class="btn btn-primary" onclick="goToGame(${proj.id})" type="button">Play The game!</button>
                        <br>
                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                            <i class="fa fa-times"></i>
                            Close Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
       
        `
        return renderModal;

    });
    renderModals = renderModals.join('');
    $('.display-modals').html(renderModals);

}

function renderProjects() {
    var renderProjs = gProjs.map(function (proj) {
        var currProjNum = +proj.id + 1
        var renderProj =
            `   
        
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${currProjNum}">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/0${currProjNum}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">Illustration</p>
        </div>
        </div>
        
        `
        return renderProj;

    });
    renderProjs = renderProjs.join('')
    $('.my-proj').html(renderProjs)
}




// <!-- Modal 1 -->
// <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="close-modal" data-dismiss="modal">
//         <div class="lr">
//           <div class="rl"></div>
//         </div>
//       </div>
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-8 mx-auto">
//             <div class="modal-body">
//               <!-- Project Details Go Here -->
//               <h2>Project Name</h2>
//               <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
//               <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
//               <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
//                 dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
//                 maiores repudiandae, nostrum, reiciendis facere nemo!</p>
//               <ul class="list-inline">
//                 <li>Date: January 2017</li>
//                 <li>Client: Threads</li>
//                 <li>Category: Illustration</li>
//               </ul>
//               <button class="btn btn-primary" data-dismiss="modal" type="button">
//                   <i class="fa fa-times"></i>
//                   Close Project</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <!-- Modal 2 -->
// <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="close-modal" data-dismiss="modal">
//         <div class="lr">
//           <div class="rl"></div>
//         </div>
//       </div>
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-8 mx-auto">
//             <div class="modal-body">
//               <!-- Project Details Go Here -->
//               <h2>Project Name</h2>
//               <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
//               <img class="img-fluid d-block mx-auto" src="img/portfolio/02-full.jpg" alt="">
//               <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
//                 dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
//                 maiores repudiandae, nostrum, reiciendis facere nemo!</p>
//               <ul class="list-inline">
//                 <li>Date: January 2017</li>
//                 <li>Client: Explore</li>
//                 <li>Category: Graphic Design</li>
//               </ul>
//               <button class="btn btn-primary" data-dismiss="modal" type="button">
//                   <i class="fa fa-times"></i>
//                   Close Project</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <!-- Modal 3 -->
// <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="close-modal" data-dismiss="modal">
//         <div class="lr">
//           <div class="rl"></div>
//         </div>
//       </div>
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-8 mx-auto">
//             <div class="modal-body">
//               <!-- Project Details Go Here -->
//               <h2>Project Name</h2>
//               <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
//               <img class="img-fluid d-block mx-auto" src="img/portfolio/03-full.jpg" alt="">
//               <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
//                 dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
//                 maiores repudiandae, nostrum, reiciendis facere nemo!</p>
//               <ul class="list-inline">
//                 <li>Date: January 2017</li>
//                 <li>Client: Finish</li>
//                 <li>Category: Identity</li>
//               </ul>
//               <button class="btn btn-primary" data-dismiss="modal" type="button">
//                   <i class="fa fa-times"></i>
//                   Close Project</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <!-- Modal 4 -->
// <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="close-modal" data-dismiss="modal">
//         <div class="lr">
//           <div class="rl"></div>
//         </div>
//       </div>
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-8 mx-auto">
//             <div class="modal-body">
//               <!-- Project Details Go Here -->
//               <h2>Project Name</h2>
//               <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
//               <img class="img-fluid d-block mx-auto" src="img/portfolio/04-full.jpg" alt="">
//               <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
//                 dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
//                 maiores repudiandae, nostrum, reiciendis facere nemo!</p>
//               <ul class="list-inline">
//                 <li>Date: January 2017</li>
//                 <li>Client: Lines</li>
//                 <li>Category: Branding</li>
//               </ul>
//               <button class="btn btn-primary" data-dismiss="modal" type="button">
//                   <i class="fa fa-times"></i>
//                   Close Project</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <!-- Modal 5 -->
// <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="close-modal" data-dismiss="modal">
//         <div class="lr">
//           <div class="rl"></div>
//         </div>
//       </div>
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-8 mx-auto">
//             <div class="modal-body">
//               <!-- Project Details Go Here -->
//               <h2>Project Name</h2>
//               <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
//               <img class="img-fluid d-block mx-auto" src="img/portfolio/05-full.jpg" alt="">
//               <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
//                 dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
//                 maiores repudiandae, nostrum, reiciendis facere nemo!</p>
//               <ul class="list-inline">
//                 <li>Date: January 2017</li>
//                 <li>Client: Southwest</li>
//                 <li>Category: Website Design</li>
//               </ul>
//               <button class="btn btn-primary" data-dismiss="modal" type="button">
//                   <i class="fa fa-times"></i>
//                   Close Project</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <!-- Modal 6 -->
// <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="close-modal" data-dismiss="modal">
//         <div class="lr">
//           <div class="rl"></div>
//         </div>
//       </div>
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-8 mx-auto">
//             <div class="modal-body">
//               <!-- Project Details Go Here -->
//               <h2>Project Name</h2>
//               <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
//               <img class="img-fluid d-block mx-auto" src="img/portfolio/06-full.jpg" alt="">
//               <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
//                 dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
//                 maiores repudiandae, nostrum, reiciendis facere nemo!</p>
//               <ul class="list-inline">
//                 <li>Date: January 2017</li>
//                 <li>Client: Window</li>
//                 <li>Category: Photography</li>
//               </ul>
//               <button class="btn btn-primary" data-dismiss="modal" type="button">
//                   <i class="fa fa-times"></i>
//                   Close Project</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>