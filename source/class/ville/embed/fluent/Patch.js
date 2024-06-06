/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Patch",
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

   var pathdregular = "M10.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm4.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM10 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-6.94 2.77a2.5 2.5 0 0 1 0-3.54l8.67-8.67a2.5 2.5 0 0 1 3.54 0l1.67 1.67a2.5 2.5 0 0 1 0 3.54l-8.67 8.67a2.5 2.5 0 0 1-3.54 0l-1.67-1.67Zm.7-2.83a1.5 1.5 0 0 0 0 2.12l1.68 1.67a1.5 1.5 0 0 0 2.12 0l1.73-1.73-3.79-3.8-1.73 1.74ZM13.8 10 10 6.2 6.2 10l3.8 3.8 3.8-3.8Zm.71-.7 1.73-1.74a1.5 1.5 0 0 0 0-2.12l-1.67-1.67a1.5 1.5 0 0 0-2.12 0L10.7 5.5l3.79 3.8Zm-3.8 6.61 1.03 1.03a2.5 2.5 0 0 0 3.54 0l1.67-1.67a2.5 2.5 0 0 0 0-3.54l-1.03-1.02-.7.7 1.02 1.03a1.5 1.5 0 0 1 0 2.12l-1.67 1.67a1.5 1.5 0 0 1-2.12 0l-1.03-1.02-.7.7ZM8.6 4.8 7.56 3.77a1.5 1.5 0 0 0-2.12 0L3.77 5.44a1.5 1.5 0 0 0 0 2.12L4.79 8.6l-.7.7-1.03-1.02a2.5 2.5 0 0 1 0-3.54l1.67-1.67a2.5 2.5 0 0 1 3.54 0L9.29 4.1l-.7.7Z";
   var pathdfilled = "m8.27 3.06 1.02 1.03-5.2 5.2-1.03-1.02a2.5 2.5 0 0 1 0-3.54l1.67-1.67a2.5 2.5 0 0 1 3.54 0Zm3.46 13.88-1.02-1.03 5.2-5.2 1.03 1.02a2.5 2.5 0 0 1 0 3.54l-1.67 1.67a2.5 2.5 0 0 1-3.54 0Zm-8.67-5.2a2.5 2.5 0 0 0 0 3.53l1.67 1.67a2.5 2.5 0 0 0 3.54 0l8.67-8.67a2.5 2.5 0 0 0 0-3.54l-1.67-1.67a2.5 2.5 0 0 0-3.54 0l-8.67 8.67ZM10 8.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM8.5 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm3.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM10.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z";
   
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