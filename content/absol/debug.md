# Cách debug component của absol


## Tìm listener, từ đó tìm element được tạo ở đâu trong code

Ví dụ với menu chính

Bước 1: log element ra console từ cây Elements, ví dụ biến temp1, ví dụ menu sẽ có tên class là `am-springboard-menu`

Bước 2: gõ `temp1._azar_extendEvents.nonprioritize` ta sẽ có danh sách toàn bộ các listener user đã truyền vào

Bước 3. Ví dụ ở đay ta thấy trong object sự kiện press, muốn biết sự kiện `press`(custom event) có thể log tới `callback` trong `temp1._azar_extendEvents.nonprioritize.press[0].callback` sẽ tìm tới được code callback của dev sử dụng module

## Tìm tới code module(trong absol)

Bước 1 tương tự

Bước 2: gõ `temp1._azar_extendTags`, đây là 1 dictionary mà mỗi phần tử là constructor(function) dẫn tới code module, đồng thời cũng biết nó tạo từ tag nào


# Error Log

## Tìm undefined

Ví dụ báo lỗi `items` of undefined ở cột 63, bật tìm kiếm code ở chế độ regex trong VS code hoặc Atom, dùng cú pháp `^[^;]{61}\.items`, 

# CSS class của các module

## Cách nhận biết

- Tên gần giống với tên gọi module
- Các phần tử con của nó sẽ có thêm hậu tố ví dụ `*-text`, `*-[phần tử con bên trong]`

## Danh sách class ứng với module thường thấy

Lấy theo `Constructor.tag` và class ở node root được trả về từ `Constructor.render` trong thư mục `absol-acomp/js`.

| Module (constructor) | Tag | CSS class ở root trong render |
| --- | --- | --- |
| AutoCompleteInput | autocompleteinput | absol-autocomplete-input |
| Board | board | as-board |
| BoardTable | boardtable | as-board-table |
| ButtonArray | buttonarray | as-button-array |
| ButtonRange | buttonrange | as-button-range |
| CalendarInput | calendarinput | absol-calendar-input |
| CandyBoxButton | candyboxbutton | absol-candy-box-border |
| ChatGPTButton | chatgptbutton | as-chat-gpt-button, as-np-dropdown-button |
| CheckBox | checkbox | absol-checkbox, as-no-label |
| CheckboxInput | checkboxinput | as-checkbox-input |
| CheckboxStepper | checkboxstepper | as-checkbox-stepper |
| CheckListBox | checklistbox | as-select-list-box, as-check-list-box |
| CheckListBoxV1 | checklistbox | as-select-list-box, as-check-list-box |
| CheckListItem | checklistitem | as-check-list-item, absol-selectlist-item |
| CheckTreeBox | checktreebox | am-check-tree-box-modal, am-modal, am-dropdown-box-modal |
| CheckTreeItem | checktreeitem | as-check-tree-item, absol-exp-node |
| CheckTreeLeafItem | checktreeleafitem | am-check-tree-leaf-item, am-check-tree-item, am-dropdown-box-item |
| CheckTreeLeafOnlyBox | checktreeleafonlybox | am-check-tree-box-modal, am-modal, am-dropdown-box-modal |
| CheckUnsafeTreeItem | checkunsafetreeitem | as-check-tree-item, as-check-unsafe-tree-item, absol-exp-node |
| CheckUnsafeTreeLeafOnlyBox | checkunsafetreeleafonlybox | am-check-tree-box-modal, am-modal, am-dropdown-box-modal |
| ChromeCalendar | chromecalendar | absol-chrome-calendar |
| ChromeTime24Picker | chrometime24picker | as-chrome-time-24-picker, as-chrome-time-picker |
| ChromeTimePicker | chrometimepicker | as-chrome-time-picker |
| CircleSectionLabel | circlesectionlabel | as-circle-section-label |
| CKInlineShortText | ckinlineshorttext | as-ck-inline-short-text |
| CKPlaceholder | ckplaceholder | as-ck-placeholder |
| CollapsibleTreeNavigator | collapsibletreenavigator | as-collapsible-tree-navigator |
| ColorCell | ColorCell | as-color-cell |
| ColorPickerButton | colorpickerbutton | as-color-picker-button |
| CompactDataGridEditor | compactdatagrideditor | as-compact-data-grid-editor |
| ContextCaptor | contextcaptor | absol-context-menu-anchor |
| CopyableIconTooltip | copyableicontooltip | as-copyable-icon-tooltip |
| CountdownClock | countdownclock | as-countdown-clock |
| CPUViewer | cpuviewer | as-cpu-viewer |
| DataOverRGBTx | dataoverrgbtx | as-data-over-rgb-tx |
| DateInput | dateinput | as-date-input |
| DateInput2 | dateinput | as-date-input |
| DateInYearInput | dateinyearinput | as-date-time-input, as-date-in-year-input, as-empty |
| DateInYearPicker | dateinyearpicker | as-date-in-year-picker |
| DateNLevelInput | datenlevelinput | as-date-n-level-input |
| DateTimeInput | datetimeinput | as-date-time-input |
| DebugDeviceInfo | debugdeviceinfo | as-debug-device-info |
| DraggableHStack | draggablehstack | absol-draggable-stack, absol-draggable-hstack |
| DraggableVStack | draggablevstack | absol-draggable-stack, absol-draggable-vstack |
| Dropdown | dropdown | absol-drop-hidden, absol-dropdown |
| DropPanel | droppanel | absol-drop-panel |
| DropPanelStack | droppanelstack | absol-drop-panel-stack |
| Dropright | dropright | absol-drop-hidden, absol-dropright |
| DualSelectBox | dualselectbox | as-dual-select-box |
| DualSelectMenu | dualselectmenu | as-dual-select-menu, absol-selectmenu, as-dual-select-menu |
| DVExpTree | dvexptree | as-dv-exp-tree |
| EditableText | editabletext | absol-editabe-text |
| EmojiCounter | emojicounter | as-emoji-counter |
| EmojiCounterList | emojicounterlist | as-emoji-counter-list |
| EmojiPicker | emojipicker | as-emoji-picker |
| EmojiPickerTooltip | emojipickertooltip | as-emoji-picker-tooltip |
| EmojiUserListTooltip | emojiuserlisttooltip | as-emoji-user-list-tooltip |
| ExpNode | expnode | absol-exp-node |
| ExpressionInput | expressioninput | as-expression-input |
| ExpTree | exptree | absol-exp-tree |
| FaceIdInput | faceidinput | as-face-id-input |
| FaceIdVerificationImage | faceidverificationimage | as-face-id-verification-image |
| FileInputBox | fileinputbox | as-file-input-box |
| FileListInput | filelistinput | as-file-list-input, as-bscroller, as-empty, as-droppable |
| FileListItem | filelistitem | as-file-list-item |
| FileThumbnail | filethumbnail | as-file-thumbnail |
| Finder | finder | as-finder |
| FlexiconButton | flexiconbutton | as-flexicon-button |
| FlexiconInput | flexiconinput | as-flexicon-input |
| FolderLikeTabBar | folderliketabbar | as-folder-like-tab-bar |
| Follower | follower | absol-follower |
| FontColorButton | fontcolorbutton | as-ribbon-split-button |
| FontFamilySelectList | fontfamilyselectlist | as-font-family-select-list, as-dropdown-box-common-style |
| FontInput | fontinput | as-font-input |
| Frame | frame | absol-frame |
| FrameView | frameview | absol-frame-view |
| GSMInput | gsminput | as-gsm-input |
| HexaSectionLabel | hexasectionlabel | as-hexa-section-label |
| HMenu | hmenu | absol-hmenu |
| HRuler | hruler | as-hruler |
| HScrollbar | hscrollbar | absol-hscrollbar |
| HScroller | hscroller | absol-hscroller |
| IconButton | IconButton | absol-icon-button |
| KVCommentItem | kvcommentitem | kv-comment-item |
| LCTItem | lctitem | as-lct-item |
| LinearColorBar | linearcolorbar | as-linear-color-bar |
| LinearColorTinyBar | linearcolortinybar | as-linear-color-tiny-bar |
| ListCompareTool | listcomparetool | as-list-compare-tool, as-width-auto, as-height-auto, as-max-height-auto |
| LoadingCubeModal | loadingcubemodal | as-loading-cube-modal |
| LocationInput | locationinput | as-location-input |
| LocationPicker | locationpicker | as-location-picker |
| LocationView | locationview | as-location-view |
| MChecklistItem | mchecklistitem | am-selectlist-item |
| MCheckListModal | mchecklistmodal | am-list-modal, am-check-list-modal |
| MCheckTreeBox | mchecktreebox | am-modal, am-dropdown-box-modal |
| MCheckTreeItem | mchecktreeitem | am-check-tree-item, am-dropdown-box-item |
| MDIPicker | mdipicker | as-mdi-picker |
| MDualSelectBox | mdualselectbox | am-modal, am-dropdown-box-modal, am-dual-select-modal |
| MediaInput | mediainput | vmedia-media-input |
| MenuButton | menubutton | absol-vmenu-button |
| MessageDialog | messagedialog | as-message-dialog |
| MessageInput | messageinput | as-message-input |
| MessageQuote | messagequote | as-message-quote-box |
| MExploreGroup | mexploregroup | am-explore-group |
| MExploreItemBlock | mexploreitemblock | am-explore-item-block |
| MExploreItemList | mexploreitemlist | am-explore-group |
| MExploreSectionBreak | mexploresectionbreak | am-explore-section-break |
| MHeaderBar | mheaderbar | am-header-bar |
| MKNavigator | mknavigator | mk-nav |
| MKNavigatorItem | mknavigatoritem | mk-nav-item |
| MListModal | mlistmodal | am-list-modal |
| MListModalV2 | mlistmodalv2 | am-list-modal-v2 |
| MNPNotificationVirtualDropdown | mnpnotificationvirtualdropdown | as-mobile-notification-virtual-dropdown, as-hidden |
| Modal | modal | as-modal |
| MSelectList | mselectlist | am-selectlist |
| MSelectListItem | mselectlistitem | am-selectlist-item |
| MSelectMenu | mselectmenu | absol-selectmenu, am-selectmenu, as-strict-value |
| MSelectTreeLeafBox | MSelectTreeLeafBox | am-modal, am-dropdown-box-modal |
| MSpringboardMenu | mspringboardmenu | am-springboard-menu |
| MultiCheckTreeLeafBox | multichecktreeleafbox | as-select-tree-leaf-box, as-select-list-box |
| MultiCheckTreeLeafMenu | multichecktreeleafmenu | as-multi-select-menu, as-multi-check-tree-leaf-menu |
| MultiCheckTreeMenu | multichecktreemenu | as-multi-select-menu, as-multi-check-tree-menu |
| MultiDateInput | multidateinput | as-multi-date-input |
| MultiSelectMenu | multiselectmenu | as-multi-select-menu |
| NotificationPanel | notificationpanel | as-notification-panel |
| NPDropdownButton | npdropdownbutton | as-np-dropdown-button |
| NPItem | npitem | as-np-item |
| NPList | nplist | as-np-list |
| NPSection | npsection | as-np-section |
| NumberInput | numberinput | absol-number-input, as-must-not-null |
| ObjectMergeTool | objectmergetool | as-omt |
| OnScreenWidget | onscreenwidget | as-onscreen-widget, as-size-loading |
| OnScreenWindow | onscreenwindow | absol-onscreen-window |
| PageIndicator | pageindicator | as-page-indicator |
| PageSelector | pageselector | absol-page-selector |
| PathMenu | pathmenu | as-path-menu |
| PathView | pathview | as-path-view |
| PickingList | pickinglist | as-picking-list |
| PinCodeInput | pincodeinput | as-pin-code-input |
| PLItem | plitem | as-picking-list-item |
| PreInput | preinput | as-preinput |
| ProcessLBar | processlbar | as-process-l-bar |
| ProgressBar | progressbar | as-progress-bar |
| ProgressCircle | progresscircle | as-progress-circle |
| QuickListButton | quicklistbutton | as-quick-list-button |
| QuickMenu | quickmenu | as-quick-menu, as-bscroller |
| QuickPath | quickpath | absol-quick-path |
| Radio | radio | absol-radio |
| RadioButton | radiobutton | absol-radio-button |
| RadioInput | radioinput | as-radio-input |
| ResizeBox | resizebox | as-resize-box |
| RibbonButton | ribbonbutton | as-ribbon-button, as-no-dropdown |
| RibbonSplitButton | ribbonsplitbutton | as-ribbon-split-button, as-no-dropdown |
| RibbonTextInput | ribbontextinput | as-ribbon-text-input |
| RotatedText | rotatedtext | as-rotated-text |
| Scrollbar | scrollbar | absol-scrollbar |
| SearchList | searchlist | absol-search-list |
| SearchMultiModeInput | searchmultimodeinput | as-search-multi-mode-input, as-empty |
| SearchTextInput | searchtextinput | absol-search-text-input |
| SelectBox | selectbox | absol-selectbox, absol-bscroller |
| SelectBoxItem | selectboxitem | absol-selectbox-item |
| SelectColorSchemeMenu | selectcolorschememenu | as-select-color-scheme-menu, absol-selectmenu |
| SelectList | selectlist | absol-selectlist |
| SelectListBox | selectlistbox | as-select-list-box |
| SelectListBox | selectlistbox_v2 | as-select-list-box |
| SelectListItem | selectlistitem | absol-selectlist-item |
| SelectMenu | selectmenu | absol-selectmenu, as-select-menu |
| SelectMenu | selectmenu-old | absol-selectmenu |
| SelectTable | selecttable | absol-select-table |
| SelectTable2 | selecttable2 | absol-select-table, exclude |
| SelectTreeLeafBox | selecttreeleafbox | as-select-tree-leaf-box, as-select-list-box |
| SelectTreeLeafItem | selecttreeleafitem | am-select-tree-leaf-item, am-dropdown-box-item |
| SelectTreeLeafMenu | selecttreeleafmenu | absol-selectmenu, as-select-menu, as-select-tree-leaf-menu, as-strict-value |
| SinglePage | singlepage | absol-single-page |
| SingleSelectList | singleselectlist | as-single-select-list, as-bscroller |
| SmileRate | smilerate | as-smile-rate |
| SnackBar | snackbar | as-snackbar |
| SolidColorPicker | solidcolorpicker | as-solid-color-picker, as-has-opacity |
| SpectrumColor | spectrumcolor | as-spectrum-color |
| StackedHorizontalBar | stackedhorizontalbar | as-stacked-horizontal-bar |
| StaticTabbar | statictabbar | absol-static-tabbar |
| StepIndicator | stepindicator | as-step-indicator |
| SwatchesTable | swatchestable | as-swatches-table |
| Switch | switch | absol-switch |
| TabButton | tabbutton | absol-tabbar-button |
| TabFrame | tabframe | absol-tab-frame |
| TableOfTextInput | tableoftextinput | as-table-of-text-input-wrapper |
| TableScroller | tablescroller | absol-table-scroller |
| TableVScroller | tablevscroller | absol-table-vscroller |
| TabView | tabview | absol-tabview |
| TextInput | textinput | as-text-input |
| Time24Input | time24input | ac-time-input, as-time-24-input |
| TimeInput | timeinput | ac-time-input |
| TimePicker | timepicker | ac-time-picker, ac-time-picker-clock-mode |
| TimeRange24Input | timerange24input | as-time-range-24-input |
| TimeSelectInput | timeselectinput | as-time-select-input |
| Toast | toast | as-toast, as-not-appeared |
| TOCItem | tocitem | as-toc-item, as-has-quick-menu |
| TOCList | toclist | as-toc-list |
| TokenField | tokenfield | as-token-field |
| TokenizeHyperInput | tokenizehyperinput | as-tokenize-hyper-input |
| ToolTip | tooltip | absol-tooltip |
| TrackBar | trackbar | absol-trackbar |
| TrackBarInput | trackbarinput | absol-trackbar-input |
| TreeChart | treechart | as-tree-chart |
| TreeList | treelist | absol-tree-list |
| TreeListItem | treelistitem | absol-tree-list-item |
| TreeTable | treetable | as-tree-table |
| VerticalTimeline | verticaltimeline | as-vertical-timeline |
| VerticalTreeDiagramNode | verticaltreediagramnode | as-vertical-tree-diagram-node |
| VMenu | vmenu | absol-vmenu |
| VRootMenu | vrootmenu | as-v-root-menu |
| VRuler | vruler | as-vruler |
| VScrollbar | vscrollbar | absol-vscrollbar |
| VScroller | vscroller | absol-vscroller |
| WindowBox | windowbox | as-window-box |
| YesNoQuestionDialog | yesnoquestiondialog | as-message-dialog-message |




Các module có `render` nhưng AI không thấy class root tĩnh  hoặc chỉ trả về thẻ đơn giản (`div`, `span`, ...): BScroller (bscroller), CountdownText (countdowntext), DropZone (dropzone), DynamicTable (dynamictable), EditableElement (editableelement), EfficientTable (efficienttable), EmptyTablePlaceholder (emptytableplaceholder), ExpGroup (expgroup), FollowerToggler (followertoggler), FontColorIcon (fontcoloricon), Hanger (hanger), HeaderBarWithSearch (headerbarwithsearch), HMenuItem (hmenuitem), IconSprite (iconsprite), IdentTextInput (identtextinput), LinearBackground (linearbackground), MTreeModal (mtreemodal), MultiCheckMenu (multicheckmenu), MultiCheckTreeMenu (multichecktreemenu), MultiLanguageText (mlt), NumberSpanInput (numberspaninput), ObsDiv (obsdiv), OldCalendarInput (calendar-input), PlaceSearchAutoCompleteInput (placesearchautocompleteinput), PositionTracker (positiontracker), RelativeTimeText (relativetimetext), RemoteSvg (remotesvg), SmileIcon (smileicon), SpanInput (spaninput), SpinnerIco (spinnerico), Sprite (sprite), TabBar (tabbar), TextArea2 (textarea2), TextClipboard (textclipboard), VerticalTreeDiagram (verticaltreediagram), VMenuItem (vmenuitem).


