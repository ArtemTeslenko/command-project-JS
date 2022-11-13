export function footerMarkup(member){
    const svg = require("../../images/icons.svg")
return member.map(({photo_face, full_name, role, git_page, telegram}) => { 
return `
    <div class="container__team">
        <div class="team__list">
            <img class="team__face" src="${photo_face}" alt="${full_name}"/>
            <div class="team__desc">
                <ul class = "team__members">
                    <li class="team__members-name">${full_name}</li>
                    <li class="team__inform">${role}</li>
                </ul>

                <ul class="team__social-sprite>
                   <li class="team__sotial-list>
                        <a href="${git_page}" class ="team__link">
                            <svg class="team__svg" height="30px" width="30px">
                                <use href="${svg}#icon-github"></use>
                            </svg>
                        </a>
                    </li> 
                    
                    <li class="team__sotial-list>
                        <a href="${telegram}" class ="team__link">
                            <svg class="team__svg" height="30px" width="30px">
                                <use href="${svg}#icon-telegram"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>  
    </div>`
}).join('');
}

