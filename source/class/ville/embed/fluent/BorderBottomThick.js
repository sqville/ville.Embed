/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BorderBottomThick",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 3.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75Zm.71 11.75a.7.7 0 0 1 .04 0h2.5a.7.7 0 0 1 .04 0H14a1.5 1.5 0 0 0 1.43-1.03v-.01a.75.75 0 0 1 1.38.58A3 3 0 0 1 14 17H6a3 3 0 0 1-2.81-1.96.75.75 0 1 1 1.41-.49c.22.56.77.95 1.4.95h2.71ZM4.61 5.45a1.5 1.5 0 0 1 .93-.88.75.75 0 0 0-.58-1.38 3 3 0 0 0-1.77 1.77.75.75 0 1 0 1.41.49Zm9.94-.85a1.5 1.5 0 0 1 .88.94.75.75 0 0 0 1.38-.58 3 3 0 0 0-1.77-1.77.75.75 0 1 0-.5 1.41ZM3 11.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm13.25.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75Z",
    FILLED : "M9 3a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H9Zm-4.64.5a1 1 0 1 1 1.16 1.62 1 1 0 0 0-.4.4 1 1 0 0 1-1.84-.33 1 1 0 0 1 .22-.83c.22-.35.51-.64.85-.87ZM6 15a1 1 0 0 1-.88-.52 1 1 0 0 0-1.84.33 1 1 0 0 0 .22.83A3 3 0 0 0 6 17h8a3 3 0 0 0 2.5-1.35 1 1 0 1 0-1.62-1.17A1 1 0 0 1 14 15H6Zm9.64-11.5a1 1 0 1 0-1.16 1.62c.17.1.3.23.4.4a1 1 0 0 0 1.84-.33 1 1 0 0 0-.22-.83 3.02 3.02 0 0 0-.85-.87ZM4 12a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Zm11-1a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0v2Z"
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