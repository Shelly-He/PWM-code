import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  { path: 'login-page', loadChildren: './login-page/login-page.module#LoginPagePageModule' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'guest-list',
    loadChildren: './guest-list/guest-list.module#GuestListPageModule'
  },
  { path: 'start-game', loadChildren: './start-game/start-game.module#StartGamePageModule' },
  { path: 'act2', loadChildren: './act2/act2.module#Act2PageModule' },
  { path: 'voting', loadChildren: './voting/voting.module#VotingPageModule' },
  { path: 'logout-page', loadChildren: './logout-page/logout-page.module#LogoutPagePageModule' },
  { path: 'char-detail', loadChildren: './char-detail/char-detail.module#CharDetailPageModule' },
  { path: 'chapter-list/:index', loadChildren: './chapter-list/chapter-list.module#ChapterListPageModule' },
  { path: 'page-list/:index', loadChildren: './page-list/page-list.module#PageListPageModule' },
  { path: 'page-view/:index', loadChildren: './page-view/page-view.module#PageViewPageModule' },
  { path: 'introduction', loadChildren: './introduction/introduction.module#IntroductionPageModule' },
  { path: 'my-role', loadChildren: './my-role/my-role.module#MyRolePageModule' },
  { path: 'getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedPageModule' },
  { path: 'overview', loadChildren: './overview/overview.module#OverviewPageModule' },
  { path: 'choose-game', loadChildren: './choose-game/choose-game.module#ChooseGamePageModule' },
  { path: 'preparations', loadChildren: './preparations/preparations.module#PreparationsPageModule' },
  { path: 'party', loadChildren: './party/party.module#PartyPageModule' },
  { path: 'edit-party', loadChildren: './edit-party/edit-party.module#EditPartyPageModule' },
  { path: 'act1', loadChildren: './act1/act1.module#Act1PageModule' },
  { path: 'ca-game', loadChildren: './ca-game/ca-game.module#CaGamePageModule' },
  { path: 'add-guest', loadChildren: './add-guest/add-guest.module#AddGuestPageModule' },
  { path: 'clues', loadChildren: './clues/clues.module#CluesPageModule' },
  { path: 'game-play', loadChildren: './game-play/game-play.module#GamePlayPageModule' },
  { path: 'voting-results', loadChildren: './voting-results/voting-results.module#VotingResultsPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
