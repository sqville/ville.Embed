/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentQueueMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m12.38 3.75 1.11 1.12L16 7.37v-.66c0-.46-.18-.9-.5-1.23l-2.4-2.44A3.5 3.5 0 0 0 10.6 2H5.75C4.83 2 4.07 2.72 4 3.62 4.48 3.23 5.1 3 5.75 3h4.85c.67 0 1.31.27 1.78.75ZM2.5 13c.28 0 .5.22.5.5v1A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 2 14.5v-1c0-.28.22-.5.5-.5ZM6 7.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 11.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm10-2v-.02c-.01-.45-.2-.88-.51-1.2l-3.77-3.77A1.75 1.75 0 0 0 10.5 4H5.74C4.78 4 4 4.78 4 5.75v8.5c0 .97.78 1.75 1.75 1.75h8.5c.97 0 1.75-.78 1.75-1.75V9.51ZM5 5.76c0-.41.34-.75.75-.75H10v3.5c0 .83.67 1.5 1.5 1.5H15v4.25c0 .41-.34.75-.75.75h-8.5a.75.75 0 0 1-.75-.75v-8.5Zm6-.54.01.01 3.77 3.77.01.01H11.5a.5.5 0 0 1-.5-.5V5.2Z",
    FILLED : "m12.38 3.75 1.11 1.12L16 7.37v-.66c0-.46-.18-.9-.5-1.23l-2.4-2.44A3.5 3.5 0 0 0 10.6 2H5.75C4.83 2 4.07 2.72 4 3.62 4.48 3.23 5.1 3 5.75 3h4.85c.67 0 1.31.27 1.78.75ZM2.5 13c.28 0 .5.22.5.5v1A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 2 14.5v-1c0-.28.22-.5.5-.5ZM10 4v4.5c0 .83.67 1.5 1.5 1.5H16v4.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9C4 4.67 4.67 4 5.5 4H10ZM6 7.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 11.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Zm5-7.25V8.5c0 .28.22.5.5.5h4.25L11 4.25Z"
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