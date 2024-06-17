/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShiftsActivity",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2.48a.5.5 0 0 1-.46.53 7 7 0 1 0 7.45 7.45.5.5 0 1 1 1 .07 8 8 0 1 1-8.52-8.51.5.5 0 0 1 .53.46Zm1 .07a.5.5 0 0 1 .6-.4c.56.12 1.1.3 1.6.52a.5.5 0 1 1-.4.91c-.44-.2-.91-.34-1.4-.44a.5.5 0 0 1-.4-.59Zm6.34 4.25a.5.5 0 1 0-.92.4c.2.45.34.91.44 1.4a.5.5 0 0 0 .98-.2 7.95 7.95 0 0 0-.5-1.6ZM14.4 3.92a.5.5 0 0 1 .7-.07c.4.33.75.69 1.08 1.08a.5.5 0 1 1-.78.63c-.28-.34-.6-.66-.93-.94a.5.5 0 0 1-.07-.7ZM10 5.5a.5.5 0 0 0-1 0v5c0 .28.22.5.5.5h3a.5.5 0 1 0 0-1H10V5.5Z",
    FILLED : "M10 2.7a.75.75 0 0 1-.67.83 6.5 6.5 0 1 0 7.14 7.14.75.75 0 1 1 1.5.16 8 8 0 1 1-8.8-8.8c.42-.04.79.26.83.68Zm1.02-.06c.1-.4.5-.65.9-.55.38.09.75.2 1.1.35a.75.75 0 0 1-.55 1.39 6.55 6.55 0 0 0-.9-.29.75.75 0 0 1-.55-.9Zm6.54 4.33a.75.75 0 0 0-1.39.56c.12.29.21.59.28.9a.75.75 0 1 0 1.46-.35c-.09-.38-.2-.75-.35-1.1ZM14.3 3.93a.75.75 0 0 1 1.06-.08c.3.27.6.56.86.87a.75.75 0 0 1-1.15.97 6.65 6.65 0 0 0-.7-.7.75.75 0 0 1-.07-1.06ZM10 5.75a.75.75 0 0 0-1.5 0v5c0 .41.34.75.75.75h3a.75.75 0 1 0 0-1.5H10V5.75Z"
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