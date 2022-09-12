'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">hike-fe-ng-bs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c7db9c859cc277efaf4f9ed265aad43e7ec5c5176f2c64e1e0368ef332bfe2fb0b833bdf471614c8692a053bc51c49102cb33b15402aecad7925bc23488d5bef"' : 'data-target="#xs-components-links-module-AppModule-c7db9c859cc277efaf4f9ed265aad43e7ec5c5176f2c64e1e0368ef332bfe2fb0b833bdf471614c8692a053bc51c49102cb33b15402aecad7925bc23488d5bef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c7db9c859cc277efaf4f9ed265aad43e7ec5c5176f2c64e1e0368ef332bfe2fb0b833bdf471614c8692a053bc51c49102cb33b15402aecad7925bc23488d5bef"' :
                                            'id="xs-components-links-module-AppModule-c7db9c859cc277efaf4f9ed265aad43e7ec5c5176f2c64e1e0368ef332bfe2fb0b833bdf471614c8692a053bc51c49102cb33b15402aecad7925bc23488d5bef"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HikesModule.html" data-type="entity-link" >HikesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HikesModule-f705d77d43bc5683723b372b953535a43fe47efb8a1d2f801c173f575e80b5ecc484f0ab3ccbfc6ad33fdd01ab0cdafa821a3c7743c2773b12a26a04c9059bb1"' : 'data-target="#xs-components-links-module-HikesModule-f705d77d43bc5683723b372b953535a43fe47efb8a1d2f801c173f575e80b5ecc484f0ab3ccbfc6ad33fdd01ab0cdafa821a3c7743c2773b12a26a04c9059bb1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HikesModule-f705d77d43bc5683723b372b953535a43fe47efb8a1d2f801c173f575e80b5ecc484f0ab3ccbfc6ad33fdd01ab0cdafa821a3c7743c2773b12a26a04c9059bb1"' :
                                            'id="xs-components-links-module-HikesModule-f705d77d43bc5683723b372b953535a43fe47efb8a1d2f801c173f575e80b5ecc484f0ab3ccbfc6ad33fdd01ab0cdafa821a3c7743c2773b12a26a04c9059bb1"' }>
                                            <li class="link">
                                                <a href="components/PageHikesAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageHikesAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageHikesEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageHikesEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageHikesListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageHikesListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HikesRoutingModule.html" data-type="entity-link" >HikesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-2933d04c2993ec1531e81ca7865e07499235f6d276b68e371c38e7ef6d9104e837d809694578615775d485674e232ff241cf67573e4aba9e203ee910d6f7cc8c"' : 'data-target="#xs-components-links-module-LoginModule-2933d04c2993ec1531e81ca7865e07499235f6d276b68e371c38e7ef6d9104e837d809694578615775d485674e232ff241cf67573e4aba9e203ee910d6f7cc8c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-2933d04c2993ec1531e81ca7865e07499235f6d276b68e371c38e7ef6d9104e837d809694578615775d485674e232ff241cf67573e4aba9e203ee910d6f7cc8c"' :
                                            'id="xs-components-links-module-LoginModule-2933d04c2993ec1531e81ca7865e07499235f6d276b68e371c38e7ef6d9104e837d809694578615775d485674e232ff241cf67573e4aba9e203ee910d6f7cc8c"' }>
                                            <li class="link">
                                                <a href="components/PageLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-1b713fdaa5c3a157eb53e29e6bc5b1d54feac7bc0920f14e2be29045a2e15be435e9d9a39cfa97e7c3619e41b78dbc5a38a954a123c76f1a870e3a35d75bb2df"' : 'data-target="#xs-components-links-module-UiModule-1b713fdaa5c3a157eb53e29e6bc5b1d54feac7bc0920f14e2be29045a2e15be435e9d9a39cfa97e7c3619e41b78dbc5a38a954a123c76f1a870e3a35d75bb2df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-1b713fdaa5c3a157eb53e29e6bc5b1d54feac7bc0920f14e2be29045a2e15be435e9d9a39cfa97e7c3619e41b78dbc5a38a954a123c76f1a870e3a35d75bb2df"' :
                                            'id="xs-components-links-module-UiModule-1b713fdaa5c3a157eb53e29e6bc5b1d54feac7bc0920f14e2be29045a2e15be435e9d9a39cfa97e7c3619e41b78dbc5a38a954a123c76f1a870e3a35d75bb2df"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});