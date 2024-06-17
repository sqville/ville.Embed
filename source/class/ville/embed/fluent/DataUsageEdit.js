/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataUsageEdit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 15h5.99c-.23.3-.4.64-.51 1H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v5.23c-.33.14-.63.34-.9.61l-.1.1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Zm8-9.5a.5.5 0 0 1 1 0v6.44l-.88.88a.5.5 0 0 1-.12-.32v-7Zm-7 2a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5ZM9 9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3A.5.5 0 0 0 9 9Zm1.98 6.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.82 4.83a2.2 2.2 0 0 1-1.03.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    FILLED : "M4 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h5.48c.15-.5.42-.96.8-1.33l1.84-1.85a.5.5 0 0 1-.12-.32v-7a.5.5 0 0 1 1 0v6.44l2.1-2.1c.27-.27.57-.47.9-.6V4a2 2 0 0 0-2-2H4Zm5 7c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5ZM5 7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Zm5.98 7.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.82 4.83a2.2 2.2 0 0 1-1.03.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"
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