export function footerMarkup(member){
return member.map(({photo_face, full_name, role, git_page, telegram, id}) => { 
return `<section class="section team">
    <div class="container">
        <h2 class="team__title">Turbo_Team</h2>
        <div class="team__card">
            <img class="team__face" src="${photo_face}" alt="${full_name}"/>
            <div class="team__desc">
                <ul>
                    <li class="team__subtitle">${full_name}</li>
                    <li class="team__subscr">${role}</li>
                    <li class="team__subscr"><a href="${git_page}">${git_page}</a></li>
                    <li class="team__subscr"><a href="${telegram}">Telegram</a></li>
                </ul>
            </div>
        </div>    
    </div>
</section>`
}).join('');
}

