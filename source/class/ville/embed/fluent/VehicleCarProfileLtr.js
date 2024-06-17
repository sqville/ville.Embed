/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleCarProfileLtr",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.52 6.03 4.86 8H8V5H6.94a1.5 1.5 0 0 0-1.42 1.03ZM4.52 9l-.26.08-.12.03A1.5 1.5 0 0 0 3 10.56v1.69c0 .16.05.31.14.43a2.5 2.5 0 0 1 4.81.32h4.1a2.5 2.5 0 0 1 4.81-.32.75.75 0 0 0 .14-.43v-1.21a1.5 1.5 0 0 0-1.11-1.45L13.69 9H4.52Zm8.35-1-1.24-2.23a1.5 1.5 0 0 0-1.3-.77H9v3h3.87ZM18 12.25c0 .7-.42 1.32-1.02 1.6a2.5 2.5 0 0 1-4.93.15h-4.1a2.5 2.5 0 0 1-4.93-.16A1.75 1.75 0 0 1 2 12.25v-1.69c0-1.1.71-2.06 1.75-2.38l.82-2.47A2.5 2.5 0 0 1 6.94 4h3.38c.91 0 1.75.5 2.19 1.29l1.54 2.77 2.1.56A2.5 2.5 0 0 1 18 11.04v1.21ZM5.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    FILLED : "M16.98 13.84c.6-.27 1.02-.88 1.02-1.59v-1.21a2.5 2.5 0 0 0-1.86-2.42l-2.09-.56-1.54-2.77A2.5 2.5 0 0 0 10.32 4H6.94a2.5 2.5 0 0 0-2.37 1.7l-.82 2.48A2.5 2.5 0 0 0 2 10.56v1.69c0 .7.42 1.32 1.02 1.6a2.5 2.5 0 0 0 4.93.15h4.1a2.5 2.5 0 0 0 4.93-.16ZM6.94 5H8v3H4.86l.66-1.97A1.5 1.5 0 0 1 6.94 5Zm4.7.77L12.86 8H9V5h1.32c.55 0 1.05.3 1.31.77ZM4 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm9 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
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