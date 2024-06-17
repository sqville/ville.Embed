/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BotSparkle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm3.5-4a.5.5 0 0 0-1 0V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h6.3l.32-1H6.5a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v3.58a1.42 1.42 0 0 1 1 .02V4.5c0-.83-.67-1.5-1.5-1.5h-3v-.5Zm-2 9h1.9a1.41 1.41 0 0 0-.4 1H5.3a.8.8 0 0 0-.8.81v.44c0 .69.13 1.46.8 2.07C6 16.45 7.34 17 10 17c1.55 0 2.66-.19 3.44-.47a1.42 1.42 0 0 0 .68.42c-.06.14-.1.29-.12.44-.91.36-2.13.59-3.75.6V18h-.5c-2.62-.04-4.2-.6-5.12-1.44A3.52 3.52 0 0 1 3.5 14H3.5v-.69c0-1 .81-1.8 1.8-1.8h3.2v-.01Zm6.38-2.22.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.22 2.22 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0-.14.46.3.3 0 0 0 .14.11l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02Zm-6.17-.52.07.05Z",
    FILLED : "M14.48 8c.18 0 .35.03.52.1V4.5c0-.83-.67-1.5-1.5-1.5h-3v-.5c0-.3-.22-.5-.5-.5a.5.5 0 0 0-.5.5V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h6.3l.33-1.04v-.01A1.42 1.42 0 0 1 14.49 8ZM7 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM10 18c1.74 0 3.04-.23 4-.61.02-.15.06-.3.12-.44a1.42 1.42 0 0 1-.96-.9v-.01l-.36-1.08-.03-.1a1.2 1.2 0 0 0-.26-.37l-.06-.06a1.2 1.2 0 0 0-.4-.24l-1.09-.35h-.01a1.42 1.42 0 0 1-.54-2.34H5.3c-1 0-1.81.81-1.81 1.81v.7c.04.77.25 1.75 1.13 2.55.95.87 2.6 1.44 5.37 1.44Zm5.23-7.65-.35-1.07a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.79 6.61.76.25h.02a.3.3 0 0 1 .14.47.3.3 0 0 1-.14.1l-.77.26a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.57 1.57 0 0 0-1-1l-.77-.25a.3.3 0 0 1-.14-.46.3.3 0 0 1 .14-.1l.77-.26a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.58 1.58 0 0 0 1 1Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});