/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Presenter",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM8.5 8a.5.5 0 0 0-.5.5V9H7v-.5C7 7.67 7.67 7 8.5 7h3c.83 0 1.5.67 1.5 1.5V9h-1v-.5a.5.5 0 0 0-.5-.5h-3ZM7 14.78v1.72c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1.72a.5.5 0 0 1 .15-.36l3.7-3.56a.5.5 0 0 0-.34-.86H3.49a.5.5 0 0 0-.35.86l3.7 3.56c.1.1.16.23.16.36Zm1 1.72v-1.72c0-.4-.17-.8-.46-1.08L4.73 11h10.54l-2.81 2.7c-.3.29-.46.68-.46 1.08v1.72a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z",
    FILLED : "M12 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 14.78v1.72c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1.72a.5.5 0 0 1 .15-.36l3.7-3.56a.5.5 0 0 0-.34-.86H3.49a.5.5 0 0 0-.35.86l3.7 3.56c.1.1.16.23.16.36ZM8.5 7C7.67 7 7 7.67 7 8.5V9h6v-.5c0-.83-.67-1.5-1.5-1.5h-3Z"
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