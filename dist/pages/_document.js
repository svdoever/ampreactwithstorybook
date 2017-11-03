"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const document_1 = require("next/document");
const react_amphtml_1 = require("react-amphtml");
const styled_components_1 = require("styled-components");
const ampCustomStylePartial = `
.editor,.editor .gutter{background-color:#fff;color:#555}.editor .indent-guide,.editor .invisible-character{color:rgba(85,85,85,.2)}.editor .wrap-guide{background-color:rgba(85,85,85,.2)}.editor .gutter{color:#555;background:#fff}.editor .fold-marker:after,.editor .gutter .line-number.folded,.editor .gutter .line-number:after{color:#e87b00}.editor .invisible{color:#555}.editor .selection .region{background-color:#e1e1e1}.editor.is-focused .cursor{border-color:#000}.editor.is-focused .selection .region{background-color:#afc4da}.editor.is-focused .line-number.cursor-line-no-selection,.editor.is-focused .line.cursor-line{background-color:rgba(255,255,134,.34)}.editor .comment{color:#998;font-style:italic}.editor .string{color:#d14}.editor .source .string .meta.embedded.line,.editor .source .string .source{color:#5a5a5a}.editor .source .string .punctuation.section.embedded,.editor .source .string .punctuation.section.embedded .source{color:#920b2d}.editor .constant.numeric{color:#d14}.editor .constant.character,.editor .constant.language,.editor .constant.other{color:#606aa1}.editor .constant.symbol{color:#990073}.editor .constant.numeric.line-number.find-in-files .match{color:rgba(143,190,0,.63)}.editor .variable{color:teal}.editor .variable.parameter{color:#606aa1}.editor .keyword{color:#222;font-weight:700}.editor .keyword.unit{color:#458}.editor .keyword.special-method{color:#0086b3}.editor .storage,.editor .storage.type{color:#222}.editor .entity.name.class,.editor .entity.other.inherited-class{text-decoration:underline;color:#606aa1}.editor .entity.name.function{color:#900}.editor .entity.name.tag{color:teal}.editor .entity.other.attribute-name{color:#458;font-weight:700}.editor .entity.name.filename.find-in-files{color:#e6db74}.editor .support.constant,.editor .support.function,.editor .support.type{color:#458}.editor .support.class{color:teal}.editor .invalid{color:#f8f8f0;background-color:#00a8c6}.editor .invalid.deprecated{color:#f8f8f0;background-color:#8fbe00}.editor .meta.structure.dictionary.json>.string.quoted.double.json,.editor .meta.structure.dictionary.json>.string.quoted.double.json .punctuation.string{color:navy}.editor .meta.structure.dictionary.value.json>.string.quoted.double.json{color:#d14}.editor .meta.diff,.editor .meta.diff.header{color:#75715e}.editor .css.support.property-name{font-weight:700;color:#333}.editor .css.constant{color:#099}.editor .source.gfm{color:#444}.editor .gfm .markup.heading{color:#111}.editor .gfm .link,.editor .gfm .variable.list{color:#888}.editor .markdown .paragraph{color:#444}.editor .markdown .heading{color:#111}.editor .markdown .link,.editor .markdown .link .string{color:#888}.editor .search-results .marker .region{background-color:transparent;border:1px solid #999}.editor .search-results .marker.current-result .region{border:1px solid #000}.bracket-matcher{background-color:#c9c9c9;opacity:.7;border-bottom:0 none}.editor .tag.block{display:inline}

/*! Bassplate | MIT License | http://github.com/basscss/bassplate */

/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}.h1{font-size:3rem}.h2{font-size:2rem}.h3{font-size:1.5rem}.h4{font-size:1.125rem}.h5{font-size:.875rem}.h6{font-size:.75rem}.font-family-inherit{font-family:inherit}.font-size-inherit{font-size:inherit}.text-decoration-none{text-decoration:none}.bold{font-weight:700}.regular{font-weight:400}.italic{font-style:italic}.caps{text-transform:uppercase;letter-spacing:.2em}.left-align{text-align:left}.center{text-align:center}.right-align{text-align:right}.justify{text-align:justify}.nowrap{white-space:nowrap}.break-word{word-wrap:break-word}.line-height-1{line-height:1rem}.line-height-2{line-height:1.125rem}.line-height-3{line-height:1.5rem}.line-height-4{line-height:2rem}.list-style-none{list-style:none}.underline{text-decoration:underline}.truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-reset{list-style:none;padding-left:0}.inline{display:inline}.block{display:block}.inline-block{display:inline-block}.table{display:table}.table-cell{display:table-cell}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.left{float:left}.right{float:right}.fit{max-width:100%}.max-width-1{max-width:24rem}.max-width-2{max-width:32rem}.max-width-3{max-width:48rem}.max-width-4{max-width:64rem}.border-box{box-sizing:border-box}.align-baseline{vertical-align:baseline}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.m0{margin:0}.mt0{margin-top:0}.mr0{margin-right:0}.mb0{margin-bottom:0}.ml0,.mx0{margin-left:0}.mx0{margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:1rem}.mt1{margin-top:1rem}.mr1{margin-right:1rem}.mb1{margin-bottom:1rem}.ml1,.mx1{margin-left:1rem}.mx1{margin-right:1rem}.my1{margin-top:1rem;margin-bottom:1rem}.m2{margin:1.5rem}.mt2{margin-top:1.5rem}.mr2{margin-right:1.5rem}.mb2{margin-bottom:1.5rem}.ml2,.mx2{margin-left:1.5rem}.mx2{margin-right:1.5rem}.my2{margin-top:1.5rem;margin-bottom:1.5rem}.m3{margin:2rem}.mt3{margin-top:2rem}.mr3{margin-right:2rem}.mb3{margin-bottom:2rem}.ml3,.mx3{margin-left:2rem}.mx3{margin-right:2rem}.my3{margin-top:2rem;margin-bottom:2rem}.m4{margin:2.5rem}.mt4{margin-top:2.5rem}.mr4{margin-right:2.5rem}.mb4{margin-bottom:2.5rem}.ml4,.mx4{margin-left:2.5rem}.mx4{margin-right:2.5rem}.my4{margin-top:2.5rem;margin-bottom:2.5rem}.mxn1{margin-left:-1rem;margin-right:-1rem}.mxn2{margin-left:-1.5rem;margin-right:-1.5rem}.mxn3{margin-left:-2rem;margin-right:-2rem}.mxn4{margin-left:-2.5rem;margin-right:-2.5rem}.ml-auto{margin-left:auto}.mr-auto,.mx-auto{margin-right:auto}.mx-auto{margin-left:auto}.p0{padding:0}.pt0{padding-top:0}.pr0{padding-right:0}.pb0{padding-bottom:0}.pl0,.px0{padding-left:0}.px0{padding-right:0}.py0{padding-top:0;padding-bottom:0}.p1{padding:1rem}.pt1{padding-top:1rem}.pr1{padding-right:1rem}.pb1{padding-bottom:1rem}.pl1{padding-left:1rem}.py1{padding-top:1rem;padding-bottom:1rem}.px1{padding-left:1rem;padding-right:1rem}.p2{padding:1.5rem}.pt2{padding-top:1.5rem}.pr2{padding-right:1.5rem}.pb2{padding-bottom:1.5rem}.pl2{padding-left:1.5rem}.py2{padding-top:1.5rem;padding-bottom:1.5rem}.px2{padding-left:1.5rem;padding-right:1.5rem}.p3{padding:2rem}.pt3{padding-top:2rem}.pr3{padding-right:2rem}.pb3{padding-bottom:2rem}.pl3{padding-left:2rem}.py3{padding-top:2rem;padding-bottom:2rem}.px3{padding-left:2rem;padding-right:2rem}.p4{padding:2.5rem}.pt4{padding-top:2.5rem}.pr4{padding-right:2.5rem}.pb4{padding-bottom:2.5rem}.pl4{padding-left:2.5rem}.py4{padding-top:2.5rem;padding-bottom:2.5rem}.px4{padding-left:2.5rem;padding-right:2.5rem}.col{float:left}.col,.col-right{box-sizing:border-box}.col-right{float:right}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}@media (min-width:40.06rem){.sm-col{float:left;box-sizing:border-box}.sm-col-right{float:right;box-sizing:border-box}.sm-col-1{width:8.33333%}.sm-col-2{width:16.66667%}.sm-col-3{width:25%}.sm-col-4{width:33.33333%}.sm-col-5{width:41.66667%}.sm-col-6{width:50%}.sm-col-7{width:58.33333%}.sm-col-8{width:66.66667%}.sm-col-9{width:75%}.sm-col-10{width:83.33333%}.sm-col-11{width:91.66667%}.sm-col-12{width:100%}}@media (min-width:52.06rem){.md-col{float:left;box-sizing:border-box}.md-col-right{float:right;box-sizing:border-box}.md-col-1{width:8.33333%}.md-col-2{width:16.66667%}.md-col-3{width:25%}.md-col-4{width:33.33333%}.md-col-5{width:41.66667%}.md-col-6{width:50%}.md-col-7{width:58.33333%}.md-col-8{width:66.66667%}.md-col-9{width:75%}.md-col-10{width:83.33333%}.md-col-11{width:91.66667%}.md-col-12{width:100%}}@media (min-width:64.06rem){.lg-col{float:left;box-sizing:border-box}.lg-col-right{float:right;box-sizing:border-box}.lg-col-1{width:8.33333%}.lg-col-2{width:16.66667%}.lg-col-3{width:25%}.lg-col-4{width:33.33333%}.lg-col-5{width:41.66667%}.lg-col-6{width:50%}.lg-col-7{width:58.33333%}.lg-col-8{width:66.66667%}.lg-col-9{width:75%}.lg-col-10{width:83.33333%}.lg-col-11{width:91.66667%}.lg-col-12{width:100%}}.flex{display:-webkit-box;display:-ms-flexbox;display:flex}@media (min-width:40.06rem){.sm-flex{display:-webkit-box;display:-ms-flexbox;display:flex}}@media (min-width:52.06rem){.md-flex{display:-webkit-box;display:-ms-flexbox;display:flex}}@media (min-width:64.06rem){.lg-flex{display:-webkit-box;display:-ms-flexbox;display:flex}}.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.items-start{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.items-end{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.items-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.items-baseline{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.items-stretch{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start{-ms-flex-item-align:start;align-self:flex-start}.self-end{-ms-flex-item-align:end;align-self:flex-end}.self-center{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.self-baseline{-ms-flex-item-align:baseline;align-self:baseline}.self-stretch{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.justify-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-around{-ms-flex-pack:distribute;justify-content:space-around}.content-start{-ms-flex-line-pack:start;align-content:flex-start}.content-end{-ms-flex-line-pack:end;align-content:flex-end}.content-center{-ms-flex-line-pack:center;align-content:center}.content-between{-ms-flex-line-pack:justify;align-content:space-between}.content-around{-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch{-ms-flex-line-pack:stretch;align-content:stretch}.flex-auto{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none{-webkit-box-flex:0;-ms-flex:none;flex:none}.order-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-last{-webkit-box-ordinal-group:100000;-ms-flex-order:99999;order:99999}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.z1{z-index:1}.z2{z-index:2}.z3{z-index:3}.z4{z-index:4}.border{border-style:solid;border-width:1px}.border-top{border-top-style:solid;border-top-width:1px}.border-right{border-right-style:solid;border-right-width:1px}.border-bottom{border-bottom-style:solid;border-bottom-width:1px}.border-left{border-left-style:solid;border-left-width:1px}.border-none{border:0}.rounded{border-radius:3px}.circle{border-radius:50%}.rounded-top{border-radius:3px 3px 0 0}.rounded-right{border-radius:0 3px 3px 0}.rounded-bottom{border-radius:0 0 3px 3px}.rounded-left{border-radius:3px 0 0 3px}.not-rounded{border-radius:0}.hide{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}@media (max-width:40rem){.xs-hide{display:none}}@media (min-width:40.06rem) and (max-width:52rem){.sm-hide{display:none}}@media (min-width:52.06rem) and (max-width:64rem){.md-hide{display:none}}@media (min-width:64.06rem){.lg-hide{display:none}}.display-none{display:none}*{box-sizing:border-box}body{background:#fff;color:#4a4a4a;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;min-width:315px;overflow-x:hidden;font-smooth:always;-webkit-font-smoothing:antialiased}main{max-width:100%;margin:0 auto}p{padding:0;margin:0}.ampstart-accent{color:#003f93}#content:target{margin-top:calc(0px - 3.5rem);padding-top:3.5rem}.ampstart-title-lg{font-size:3rem;line-height:3.5rem;letter-spacing:.06rem}.ampstart-title-md{font-size:2rem;line-height:2.5rem;letter-spacing:.06rem}.ampstart-title-sm{font-size:1.5rem;line-height:2rem;letter-spacing:.06rem}.ampstart-subtitle,body{line-height:1.5rem;letter-spacing:normal}.ampstart-subtitle{color:#003f93;font-size:1rem}.ampstart-byline,.ampstart-caption,.ampstart-hint,.ampstart-label{font-size:.875rem;color:#4f4f4f;line-height:1.125rem;letter-spacing:.06rem}.ampstart-label{text-transform:uppercase}.ampstart-footer,.ampstart-small-text{font-size:.75rem;line-height:1rem;letter-spacing:.06rem}.ampstart-card{box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 1px -1px rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.h1,h1{font-size:3rem;line-height:3.5rem}.h2,h2{font-size:2rem;line-height:2.5rem}.h3,h3{font-size:1.5rem;line-height:2rem}.h4,h4{font-size:1.125rem;line-height:1.5rem}.h5,h5{font-size:.875rem;line-height:1.125rem}.h6,h6{font-size:.75rem;line-height:1rem}h1,h2,h3,h4,h5,h6{margin:0;padding:0;font-weight:400;letter-spacing:.06rem}a,a:active,a:visited{color:inherit}.ampstart-btn{font-family:inherit;font-weight:inherit;font-size:1rem;line-height:1.125rem;padding:.7em .8em;text-decoration:none;white-space:nowrap;word-wrap:normal;vertical-align:middle;cursor:pointer;background-color:#fff;color:#280e75;border:1px solid #280e75}.ampstart-btn:visited{color:#280e75}.ampstart-btn-secondary{background-color:#280e75;color:#fff;border:1px solid #fff}.ampstart-btn-secondary:visited{color:#fff}.ampstart-btn:active .ampstart-btn:focus{opacity:.8}.ampstart-btn[disabled],.ampstart-btn[disabled]:active,.ampstart-btn[disabled]:focus,.ampstart-btn[disabled]:hover{opacity:.5;outline:0;cursor:default}.ampstart-dropcap:first-letter{color:#fff;font-size:3rem;font-weight:700;float:left;overflow:hidden;line-height:3rem;margin-left:0;margin-right:.5rem}.ampstart-initialcap{padding-top:1.5rem;margin-top:2rem}.ampstart-initialcap:first-letter{color:#fff;font-size:3rem;font-weight:700;margin-left:-2px}.ampstart-pullquote{border:none;border-left:4px solid #fff;font-size:1.5rem;padding-left:2rem}.amp-carousel-button-next{background-image:url('data:image/svg+xml;charset=utf-8,<svg width="18" height="18" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><title>Next</title><path d="M25.557 14.7L13.818 2.961 16.8 0l16.8 16.8-16.8 16.8-2.961-2.961L25.557 18.9H0v-4.2z" fill="#FFF" fill-rule="evenodd"/></svg>')}.amp-carousel-button-prev{background-image:url('data:image/svg+xml;charset=utf-8,<svg width="18" height="18" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><title>Previous</title><path d="M33.6 14.7H8.043L19.782 2.961 16.8 0 0 16.8l16.8 16.8 2.961-2.961L8.043 18.9H33.6z" fill="#FFF" fill-rule="evenodd"/></svg>')}.ampstart-headerbar{background-color:#fff;color:#000;z-index:999;box-shadow:0 0 5px 2px rgba(0,0,0,.1)}.ampstart-headerbar+:not(amp-sidebar),.ampstart-headerbar+amp-sidebar+*{margin-top:3.5rem}.ampstart-headerbar-nav .ampstart-nav-item{padding:0 1.5rem;background:transparent;opacity:.8}.ampstart-headerbar-nav{line-height:3.5rem}.ampstart-nav-item:active,.ampstart-nav-item:focus,.ampstart-nav-item:hover{opacity:1}.ampstart-navbar-trigger:focus{outline:none}.ampstart-nav a,.ampstart-navbar-trigger,.ampstart-sidebar-faq a{cursor:pointer;text-decoration:none}.ampstart-nav .ampstart-label{color:inherit}.ampstart-navbar-trigger{line-height:3.5rem;font-size:2rem}.ampstart-headerbar-nav{-webkit-box-flex:1;-ms-flex:1;flex:1}.ampstart-nav-search{-webkit-box-flex:0.5;-ms-flex-positive:0.5;flex-grow:0.5}.ampstart-headerbar .ampstart-nav-search:active,.ampstart-headerbar .ampstart-nav-search:focus,.ampstart-headerbar .ampstart-nav-search:hover{box-shadow:none}.ampstart-nav-search>input{border:none;border-radius:3px;line-height:normal}.ampstart-nav-dropdown{min-width:200px}.ampstart-nav-dropdown amp-accordion header{background-color:#fff;border:none}.ampstart-nav-dropdown amp-accordion ul{background-color:#fff}.ampstart-nav-dropdown .ampstart-dropdown-item,.ampstart-nav-dropdown .ampstart-dropdown>section>header{background-color:#fff;color:#000}.ampstart-nav-dropdown .ampstart-dropdown-item{color:#003f93}.ampstart-sidebar{background-color:#fff;color:#000;min-width:300px;width:300px}.ampstart-sidebar .ampstart-icon{fill:#003f93}.ampstart-sidebar-header{line-height:3.5rem;min-height:3.5rem}.ampstart-sidebar .ampstart-dropdown-item,.ampstart-sidebar .ampstart-dropdown header,.ampstart-sidebar .ampstart-faq-item,.ampstart-sidebar .ampstart-nav-item,.ampstart-sidebar .ampstart-social-follow{margin:0 0 2.5rem}.ampstart-sidebar .ampstart-nav-dropdown{margin:0}.ampstart-sidebar .ampstart-navbar-trigger{line-height:inherit}.ampstart-navbar-trigger svg{pointer-events:none}.ampstart-icon{fill:#003f93}.ampstart-footer{background-color:#fff;color:#000;padding-top:7rem;padding-bottom:7rem}.ampstart-footer .ampstart-icon{fill:#000}.ampstart-footer .ampstart-social-follow li:last-child{margin-right:0}amp-user-notification{background:#fff;box-shadow:0 0 5px 2px rgba(0,0,0,.1)}.www-header,h1,h2,h3,h4,h5,h6{font-family:Inconsolata,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif}.ampstart-headerbar-nav .ampstart-nav-item{padding-right:1rem}.ampstart-headerbar-nav .ampstart-nav-item.www-current-page{color:#066573}.ampstart-headerbar-nav .ampstart-nav-item.www-current-page:after,.www-secondary-nav-anchor[selected]:after{content:"";display:block;height:4px;background:linear-gradient(90deg,#280e75 0,#066573)}.www-header{background-image:linear-gradient(90deg,#280e75 0,#066573);padding:7rem 0;color:#fff;-webkit-clip-path:polygon(100% 100%,100% 0,-400% 0);clip-path:polygon(100% 100%,100% 0,-400% 0)}.www-heading{letter-spacing:inherit;color:#000}.www-heading:after{content:"";display:block;height:2px;width:2.5rem;background:#4a4a4a;position:absolute;bottom:0}.ampstart-footer{position:relative}.ampstart-footer:before{content:"";position:absolute;width:100%;height:35px;background-image:linear-gradient(90deg,#280e75 0,#066573);top:0;left:0;right:0}.ampstart-device-preview-mask,.ampstart-device-preview-select{background:#f9f7f7}.ampstart-device-preview-select{box-shadow:0 0 5px 2px rgba(0,0,0,.1)}.www-secondary-nav{padding-top:4.5rem;margin-top:-4.5rem;box-shadow:5px 0 5px -5px rgba(0,0,0,.4);min-width:200px}.www-secondary-nav-anchors{position:-webkit-sticky;position:sticky;top:7rem}.www-secondary-nav-anchor{clear:both}body .www-secondary-nav-anchors .www-secondary-nav-anchor[option][selected]{outline:none}.www-secondary-nav-anchor:after{content:"";display:block;height:4px;background:transparent}.www-secondary-nav-anchor[selected]:after{background:linear-gradient(90deg,#280e75 0,#066573)}#svg-gradient .start{stop-color:#280e75}#svg-gradient .stop{stop-color:#066573}.www-header>*{padding-left:7rem;padding-right:7rem}.www-component-desc>*{padding-left:5rem;padding-right:5rem}.www-component-desc{margin-bottom:5rem}.www-component-desc h3{letter-spacing:inherit}.www-component-desc:target:before{content:"";display:block;height:3.5rem}.www-component-desc [placeholder]{background:#fff}.www-component-rendered{margin-top:3.5rem}.www-component-desc pre{font-family:monospace;line-height:1rem;font-size:1.125rem;white-space:pre-line;background:#f9f7f7;overflow-y:auto;margin:0}.www-example-code,.www-example-code h3{background:#f9f7f7}.www-example-code amp-accordion h3:after{content:"";background:url(img/www/caret.svg) 0 0 transparent no-repeat;width:11px;height:7px;display:inline-block;margin-left:2rem}.www-example-code amp-accordion [expanded] h3:after{-webkit-transform:scaleY(-1);transform:scaleY(-1)}@media (max-width:40rem){.www-component-desc>*{padding-left:0;padding-right:0}.www-component-desc{margin-bottom:3.5rem}.www-components{margin-right:1.5rem}.www-header>*{padding-left:1.5rem;padding-right:1.5rem}}@media (min-width:40.06rem) and (max-width:52rem){.www-components{margin-right:1.5rem}.www-header{margin-left:calc(-1 * 1rem)}.www-header>*{padding-left:0;padding-right:0}}@media (max-width:363px){.www-component-iframe-container>amp-iframe{-webkit-transform:scale(.792);transform:scale(.792);-webkit-transform-origin:0 0;transform-origin:0 0;width:343px}}
`;
// This is only needed for react@<16.0.0 & react-dom@<16.0.0
// Whitelists the `amp-` and `custom-elements` attributes
// whitelist();
class MyDocument extends document_1.default {
    static getInitialProps({ req, renderPage }) {
        const ampScripts = new react_amphtml_1.AmpScripts();
        const sheet = new styled_components_1.ServerStyleSheet();
        const page = renderPage((App => props => (sheet.collectStyles((react_1.default.createElement(react_amphtml_1.AmpScriptsManager, { ampScripts: ampScripts },
            react_1.default.createElement(App, Object.assign({}, props))))))));
        const ampScriptTags = ampScripts.getScriptElements();
        // AMP only allows for 1 style tag, so we need to compbine all the style
        // tags generated by styled-components
        /* eslint-disable react/no-danger */
        const ampStyleTag = (react_1.default.createElement("style", { "amp-custom": "", dangerouslySetInnerHTML: {
                __html: ampCustomStylePartial + '\n' + sheet.getStyleElement().reduce((css, { props: { dangerouslySetInnerHTML: { __html = '', } = {}, } = {}, } = {}) => (`${css}${__html}`), ''),
            } }));
        /* eslint-enable */
        // Get the dynamic `<title />` from the head generated by next.js
        const title = (page.head.filter(({ type }) => type === 'title')[0] ||
            react_1.default.createElement("title", null, "ampreact"));
        return {
            ...page,
            title,
            url: req.url,
            ampScriptTags,
            ampStyleTag,
        };
    }
    render() {
        const { title, url, ampScriptTags, ampStyleTag, html, } = this.props;
        /* eslint-disable react/no-danger */
        return (react_1.default.createElement("html", { lang: "nl", amp: "" },
            react_1.default.createElement("head", null,
                title,
                react_amphtml_1.headerBoilerplate(url),
                ampScriptTags,
                ampStyleTag),
            react_1.default.createElement("body", { dangerouslySetInnerHTML: { __html: html } })));
        /* eslint-enable */
    }
}
exports.default = MyDocument;
//# sourceMappingURL=_document.js.map