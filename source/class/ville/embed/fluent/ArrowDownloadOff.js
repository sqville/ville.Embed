/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowDownloadOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7L9.5 10.2v4.09l-3.65-3.64-.07-.06a.5.5 0 0 0-.64.76l4.46 4.46c.1.11.24.19.4.19l.1-.01a.5.5 0 0 0 .26-.14l2.39-2.4 4.4 4.4a.5.5 0 0 0 .7-.7l-15-15Zm9.2 10.6-1.55 1.54V11.2l1.54 1.55Zm2.11-.7-.7-.72.68-.68a.5.5 0 0 1 .64-.06l.07.06c.17.17.2.44.06.63l-.06.07-.69.7ZM9.5 7.37l1 1V2.4a.5.5 0 0 0-1 .1v4.87Zm6 9.62a.5.5 0 0 1 .09 1H4.5a.5.5 0 0 1-.09-1H15.5Z",
    FILLED : "m9.25 9.96-7.1-7.1a.5.5 0 1 1 .7-.71l15 15a.5.5 0 0 1-.7.7l-4.6-4.59-2.01 2.02-.07.06-.1.06-.03.02-.1.04-.11.03-.07.01H10l-.15-.01-.08-.03a.73.73 0 0 1-.26-.14l-4.29-4.29A.75.75 0 0 1 6.2 9.9l.08.07 2.97 2.97V9.96Zm2.24 2.24-.74-.74v1.48l.74-.74Zm2.48-.35-1.06-1.06.8-.82c.27-.26.7-.29.99-.07l.08.07c.27.27.3.68.07.98l-.07.08-.81.82ZM9.25 7.13l1.5 1.5V2.65a.75.75 0 0 0-1.5.1v4.38Zm6 9.37a.75.75 0 0 1 .1 1.5H4.75a.75.75 0 0 1-.1-1.5h10.6Z"
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