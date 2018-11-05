https://www.ebay.com.au/itm/20Pcs-Instant-Films-Photo-Sticker-For-FujiFilm-Instax-Wide-210-300-Camera-HC/292537339177?hash=item441c958d29%3Am%3AmAnKK9m8MYh0usDiNZjjvsA&var=591359504224

https://www.ebay.com.au/itm/Fujifilm-Fuji-Instax-WIDE-300-Camera-Instant-210-Wide-Film-Photos-Free-Gift/142361427151?hash=item212566fccf%3Am%3AmvGI-6U1C8hHTxQCBIxuf-w&var=441385619513

https://skillcrush.com/2018/06/18/projects-you-can-do-with-javascript/

https://www.udemy.com/javascript-for-absolute-beginners-learn-the-basics/




<!--<button id="pm-LS-btnSelectSubmitToLodgement" type="submit" class="btn pm-btn-calculate pm-ls-submit-buttons" data-toggle="dropdown"
                                        ng-disabled="!canSubmitToLodgement()" ng-click="toggleshowSubmitList()">
                                <div id="pm-LS-divSubmitToLodgementDisplayDrpButton" class="pm-ls-lodegement-summary-btn-group-btn" title="Submit to Lodgement">
                                    Submit to Lodgement
                                </div>
                                <i ng-if="showSubmitList" class="material-icons">arrow_drop_down</i>
                                <i ng-if="!showSubmitList" class="material-icons">arrow_drop_up</i>                                                                    
                            </button>-->
                            
                            <div class="pm-btn-calculate pm-ls-submit-buttons" ng-disabled="!canSubmitToLodgement()" ng-click="toggleshowSubmitList()">
                                <div id="pm-LS-divSubmitToLodgementDisplayDrpButton" class="pm-ls-lodegement-summary-btn-group-btn" title="Submit to Lodgement">
                                    Submit to Lodgement
                                </div>
                                <i ng-if="!showSubmitList" class="material-icons">arrow_drop_down</i>
                                <i ng-if="showSubmitList" class="material-icons">arrow_drop_up</i>
                            </div>

                            <ul class="dropdown-menu" style="width: 100%; padding: 0; border-radius: 4px;" ng-show="showSubmitList">
                                <li class="pm-ls-submit-lodgement-li" style="border-bottom: 1px solid #ddd;">
                                    <a ng-click="submitToApplyonline()" id="pm-LS-btnSubmitToApplyonline" title="Submit to Applyonline">
                                        <img class="applyonline-image">
                                        <span>Submit to Applyonline</span>
                                    </a>
                                </li>
                                <li class="pm-ls-submit-lodgement-li">
                                    <a ng-click="submitToloanapp()" id="pm-LS-btnSubmitLoanapp">
                                        <img class="loanapp-image" style="margin-right: 16px;">Submit to Loanapp
                                    </a>

                                </li>
                            </ul>
                            
                            
                            
                            $scope.showSubmitList = true;

            $scope.toggleshowSubmitList = function () {
                $scope.showSubmitList = !$scope.showSubmitList;
            }
