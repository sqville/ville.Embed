/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BorderBottom",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5.54 4.05a2 2 0 0 0-1.5 1.55.5.5 0 0 1-.59.4.5.5 0 0 1-.38-.66 3 3 0 0 1 2.34-2.29.5.5 0 0 1 .6.4.5.5 0 0 1-.47.6ZM3.07 14.66a.5.5 0 0 1 .38-.66.5.5 0 0 1 .6.46A2 2 0 0 0 6 16h8a2 2 0 0 0 1.95-1.6.5.5 0 0 1 .6-.4.5.5 0 0 1 .38.66A3 3 0 0 1 14 17H6a3 3 0 0 1-2.93-2.34ZM14.6 3.06a3 3 0 0 1 2.36 2.36.5.5 0 0 1-.4.58.5.5 0 0 1-.6-.46 2 2 0 0 0-1.55-1.5.5.5 0 0 1-.4-.59.5.5 0 0 1 .6-.4ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Z",
    FILLED : "M8 3.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75Zm.71 11.75a.7.7 0 0 1 .04 0h2.5a.7.7 0 0 1 .04 0H14a1.5 1.5 0 0 0 1.43-1.03v-.01a.75.75 0 0 1 1.38.58A3 3 0 0 1 14 17H6a3 3 0 0 1-2.81-1.96.75.75 0 1 1 1.41-.49c.22.56.77.95 1.4.95h2.71ZM4.61 5.45a1.5 1.5 0 0 1 .93-.88.75.75 0 0 0-.58-1.38 3 3 0 0 0-1.77 1.77.75.75 0 1 0 1.41.49Zm9.94-.85a1.5 1.5 0 0 1 .88.94.75.75 0 0 0 1.38-.58 3 3 0 0 0-1.77-1.77.75.75 0 1 0-.5 1.41ZM3 11.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm13.25.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75Z"
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