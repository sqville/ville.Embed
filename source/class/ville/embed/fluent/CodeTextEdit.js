/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CodeTextEdit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.5 5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1H2.5Zm3 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 11.5c0-.28.22-.5.5-.5h9.44l-1 1H4.5a.5.5 0 0 1-.5-.5Zm6.27 3.17.67-.67H2.5a.5.5 0 0 0 0 1h7.49c.08-.12.18-.23.28-.33ZM12.5 8.5c0-.28.22-.5.5-.5h3.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5Zm-2-3.5a.5.5 0 0 0 0 1H17a.5.5 0 0 0 0-1h-6.5Zm.48 10.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    FILLED : "M2.75 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Zm3 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM4 11.25c0-.41.34-.75.75-.75h9.5c.06 0 .12 0 .17.02L12.94 12H4.75a.75.75 0 0 1-.75-.75Zm6.27 3.42.98-.98a.75.75 0 0 0-.5-.19h-8a.75.75 0 0 0 0 1.5h7.24c.08-.12.18-.23.28-.33Zm2.23-6.42c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM10.75 4.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm.23 10.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"
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