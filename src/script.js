// Image editor
var my_locale = {
  // override default English locale to your custom
  color: "Màu sắc",
  bold: "Độ đậm font chữ",
  TextSize: "Font Chữ",
  load: "Tải ảnh",
  // etc...
};
var settings = {
  i18n: {
    Color: "Màu",
    Bold: "Độ đậm font chữ",
    "Text size": "Font Chữ",
    load: "Tải ảnh",
  },
  imgName: "Image",
  hideLoadBtn: false,
};

var imageEditor = new tui.ImageEditor("#tui-image-editor-container", {
  includeUI: {
    loadImage: {
      path: "https://picsum.photos/500/500",
      name: "edit",
    },
    menu: ["text"],
    locale: {
      // override default English locale to your custom
      Color: "Chọn Màu",
      Bold: "Font đậm",
      "Text size": "Font chữ",
      // etc...
    },
    theme: blackTheme, // or whiteTheme
    initMenu: "text",
    menuBarPosition: "bottom",
  },
  cssMaxWidth: 700,
  cssMaxHeight: 500,
  usageStatistics: false,
});

window.onresize = function () {
  imageEditor.ui.resizeEditor();
};

$(
  ".tui-image-editor-header-buttons .tui-image-editor-download-btn"
).replaceWith('<button class="tui-image-editor-save-btn" >Lưu ảnh</botton>');
$(".tui-image-editor-header-logo").hide();
// $('.tui-image-editor-menu').hide();

// $('.tui-image-editor-header-buttons div:first').hide();
var loadBtn = $(".tui-image-editor-header-buttons div:first");
if (settings.hideLoadBtn) loadBtn.hide();

if (x == undefined) x = "value x";
console.log("testX : " + x);

window.onload = () => {
  imageEditor
    .addText("Chỉnh tiêu đề", {
      styles: {
        fill: "#000",
        fontSize: 100,
        fontWeight: "Bold",
        opacity: 1,
        fontStyle: "Chữ nghiên",
        textAlign: "Căn giữa chữ",
        textDecoration: "Gạch chân",
        // text:'test',
        // fontFamily:'Noto+Sans+TC'
        // fontFamily:'Hanna+Sans'
      },
      position: {
        x: 10,
        y: 10,
      },
    })
    .then((objectProps) => {
      console.log(objectProps.id);
      console.log("imageEditor is null : " + (imageEditor == undefined));
    });
};
