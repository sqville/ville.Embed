/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberCircle3",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM7.43 7.38a.5.5 0 0 0 .7-.06.98.98 0 0 1 .11-.11c.09-.08.21-.18.38-.29.33-.21.8-.42 1.38-.42 1.02 0 1.75.73 1.75 1.5S11.02 9.5 10 9.5h-.5a.5.5 0 0 0 0 1h.5c1.02 0 1.75.73 1.75 1.5s-.73 1.5-1.75 1.5a2.53 2.53 0 0 1-1.87-.82.5.5 0 0 0-.76.64v.01l.02.01a1.85 1.85 0 0 0 .17.18 3.53 3.53 0 0 0 2.44.98c1.46 0 2.75-1.07 2.75-2.5a2.4 2.4 0 0 0-1.1-2 2.4 2.4 0 0 0 1.1-2c0-1.43-1.29-2.5-2.75-2.5a3.53 3.53 0 0 0-2.61 1.16l-.02.01a.5.5 0 0 0 .06.71Z";
   var pathdfilled = "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-1 8c0-.28.22-.5.5-.5h.5c1.02 0 1.75-.73 1.75-1.5S11.02 6.5 10 6.5a2.53 2.53 0 0 0-1.87.82.5.5 0 0 1-.76-.64v-.01l.02-.01a2 2 0 0 1 .17-.18A3.53 3.53 0 0 1 10 5.5c1.46 0 2.75 1.07 2.75 2.5a2.4 2.4 0 0 1-1.1 2 2.4 2.4 0 0 1 1.1 2c0 1.43-1.29 2.5-2.75 2.5a3.53 3.53 0 0 1-2.61-1.16l-.02-.01a.5.5 0 0 1 .76-.65l.02.02.1.09a2.53 2.53 0 0 0 1.76.71c1.01 0 1.74-.73 1.74-1.5s-.73-1.5-1.75-1.5h-.5A.5.5 0 0 1 9 10Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});