/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClosedCaptionOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h10l.28-.01 1.87 1.86a.5.5 0 0 0 .7-.7l-1.48-1.48-.76-.77-2.93-2.93-1.06-1.05L10.5 9.8 8.94 8.23 7.77 7.06 4.72 4.01 2.85 2.15ZM14.3 15H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.39-1.9l2.1 2.1-.09.04C5.56 7.66 5 8.61 5 10c0 1.39.56 2.34 1.4 2.76.82.41 1.8.24 2.45-.4a.5.5 0 1 0-.7-.71c-.35.35-.87.43-1.3.22C6.44 11.66 6 11.1 6 10s.44-1.66.85-1.87c.15-.07.3-.1.46-.11L14.3 15Zm2.9.06-.72-.7A2 2 0 0 0 17 13V7a2 2 0 0 0-2-2H7.12l-1-1H15a3 3 0 0 1 3 3v6c0 .8-.31 1.52-.82 2.06Zm-5.65-5.64-.81-.81c.24-.65.65-1.11 1.17-1.37.82-.41 1.8-.24 2.45.4a.5.5 0 0 1-.7.71 1.12 1.12 0 0 0-1.3-.22c-.33.17-.68.56-.8 1.3Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h10l.28-.01 1.87 1.86a.5.5 0 0 0 .7-.7l-1.48-1.48-3.7-3.7-1.05-1.05L10.5 9.8 8.94 8.23 7.77 7.06 4.72 4.01 2.85 2.15Zm4.46 5.87c-.16 0-.31.04-.46.11C6.44 8.34 6 8.9 6 10s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 1 1 .7.7c-.65.65-1.63.82-2.45.41C5.56 12.34 5 11.39 5 10c0-1.39.56-2.34 1.4-2.76l.1-.04.81.82Zm3.42.59L6.13 4H15a3 3 0 0 1 3 3v6c0 .8-.31 1.52-.82 2.06l-5.64-5.64c.13-.73.48-1.12.8-1.29.44-.21.96-.13 1.3.22a.5.5 0 0 0 .71-.7 2.12 2.12 0 0 0-2.45-.41c-.52.26-.93.72-1.17 1.37Z"
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