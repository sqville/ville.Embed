/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChartPerson",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2c.28 0 .5.22.5.5V3h4.75A2.75 2.75 0 0 1 18 5.75v4.6c-.26-.4-.6-.72-1-.95V5.75c0-.65-.35-1.22-.88-1.52l-.02-.01a1.74 1.74 0 0 0-.85-.22H4.75C3.78 4 3 4.78 3 5.75v6.55c.03.94.8 1.7 1.75 1.7h8.51l.01.01a2.5 2.5 0 0 0-1.77.99H7.77l-1.85 2.78a.5.5 0 1 1-.84-.55L6.57 15H4.75A2.75 2.75 0 0 1 2 12.25v-6.5A2.75 2.75 0 0 1 4.75 3H9.5v-.5c0-.28.22-.5.5-.5ZM5 6.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM5 9c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 9Zm12.5 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    FILLED : "M10.5 2.5a.5.5 0 1 0-1 0V3H4.75A2.75 2.75 0 0 0 2 5.75v6.5A2.75 2.75 0 0 0 4.75 15h1.82l-1.49 2.23a.5.5 0 0 0 .84.55L7.77 15H11.5a2.5 2.5 0 0 1 1.77-.99A2.99 2.99 0 0 1 15.5 9a3 3 0 0 1 2.5 1.34V5.75A2.75 2.75 0 0 0 15.25 3H10.5v-.5ZM5 6.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 4.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm0-2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Zm12 3.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z"
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