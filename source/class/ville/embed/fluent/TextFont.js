/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextFont",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 2c.2 0 .4.13.47.32L8.9 8.57v.02l.18.44-.53 1.4-.46-1.17H3.91l-.94 2.42a.5.5 0 1 1-.94-.36L3.1 8.59v-.02l2.43-6.25A.5.5 0 0 1 6 2ZM4.3 8.26h3.4L6 3.88 4.3 8.26Zm8.17-2.94a.5.5 0 0 0-.94 0L7.15 17H6.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.28l1.13-3h5.37l1.15 3h-.37a.5.5 0 1 0 0 1h2a.5.5 0 1 0 0-1h-.56L12.47 5.32ZM14.34 13H9.72l2.29-6.09L14.34 13Z",
    FILLED : "M6 2c.31 0 .59.2.7.48l2.27 5.94.05.13.03.1-.79 2.12-.48-1.27H4.22l-.77 2.02a.75.75 0 0 1-1.4-.53l3.25-8.5A.75.75 0 0 1 6 2ZM4.8 8h2.4L6 4.85 4.8 8Zm7.9-2.51a.75.75 0 0 0-1.4 0L7.2 16.5h-.44a.75.75 0 0 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-.47l.75-2h4.92l.75 2h-.46a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.44L12.7 5.49Zm1.2 7.5h-3.8L12 7.9l1.9 5.1Z"
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